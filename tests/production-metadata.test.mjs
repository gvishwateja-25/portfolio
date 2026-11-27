import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

// Run after npm run build to check what Next.js actually renders.
const origin = "https://www.vishwateja.in";
const readBuild = (path) => readFile(new URL(`../.next/${path}`, import.meta.url), "utf8");

test("page metadata retains distinct canonicals and uses the new social image", async () => {
  for (const [file, path] of [["index", "/"], ["certificates", "/certificates"]]) {
    const html = await readBuild(`server/app/${file}.html`);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    const openGraphUrl = html.match(/<meta property="og:url" content="([^"]+)"/);
    assert.ok(canonical);
    assert.ok(openGraphUrl);
    assert.equal(new URL(canonical[1]).href, new URL(path, origin).href);
    assert.equal(new URL(openGraphUrl[1]).href, new URL(path, origin).href);
    assert.ok(html.includes(`<meta property="og:image" content="${origin}/images/og.png"`));
    assert.ok(html.includes(`<meta name="twitter:image" content="${origin}/images/og.png"`));
    const structuredData = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
      .map((match) => JSON.parse(match[1]));
    assert.equal(structuredData.filter((entry) => entry["@type"] === "ProfessionalService").length, 1);
    if (path === "/") {
      assert.ok(structuredData.some((entry) => entry["@type"] === "Person"));
    }
  }
});

test("crawler output covers all case studies without fabricated modification dates", async () => {
  const sitemap = await readBuild("server/app/sitemap.xml.body");
  const caseStudies = await readdir(new URL("../public/case-studies/", import.meta.url));
  const paths = ["/", "/certificates", ...caseStudies.filter((file) => file.endsWith(".html"))
    .map((file) => `/case-studies/${file}`)];
  assert.equal([...sitemap.matchAll(/<loc>/g)].length, paths.length);
  for (const path of paths) assert.ok(sitemap.includes(`<loc>${origin}${path}</loc>`));
  assert.ok(!sitemap.includes("<lastmod>"));
  assert.ok((await readBuild("server/app/robots.txt.body")).includes(`Sitemap: ${origin}/sitemap.xml`));
});

test("security headers cover application routes and static case studies", async () => {
  const manifest = JSON.parse(await readBuild("routes-manifest.json"));
  const rule = manifest.headers.find((entry) => entry.source === "/:path*");
  assert.ok(rule);
  const headers = Object.fromEntries(rule.headers.map(({ key, value }) => [key, value]));
  assert.equal(headers["X-Content-Type-Options"], "nosniff");
  assert.equal(headers["X-Frame-Options"], "DENY");
  assert.equal(headers["Strict-Transport-Security"], "max-age=63072000");
  assert.ok(headers["Content-Security-Policy-Report-Only"]);
  assert.ok(!headers["Content-Security-Policy"]);
  for (const path of ["/", "/certificates", "/case-studies/index.html", "/images/og.png"]) {
    assert.ok(new RegExp(rule.regex).test(path));
  }
});
