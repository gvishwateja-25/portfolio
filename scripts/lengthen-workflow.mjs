// Insert space between nodes without rescaling their pixels or connector strokes.
import sharp from 'sharp';
(async () => {
  const source = 'public/images/devops-ci-cd-flow-labeled.gif';
  const meta = await sharp(source, { animated: true }).metadata();
  const frames = [];
  // Move labels as complete rectangles; inserting columns through text splits glyphs.
  const labels = [
    [95, 66, 76, 34, 0, 0], [183, 66, 105, 34, 24, 0],
    [298, 66, 86, 34, 48, 0], [402, 66, 80, 34, 72, 0],
    [504, 66, 80, 34, 96, 0], [415, 207, 96, 28, 96, 24],
    [365, 335, 90, 24, 72, 48], [498, 335, 93, 24, 96, 48],
  ];
  for (let frame = 0; frame < meta.pages; frame++) {
    let input = await sharp(source, { page: frame }).ensureAlpha().png().toBuffer();
    const labelLayers = [], clearLayers = [];
    for (const [left, top, width, height, dx, dy] of labels) {
      labelLayers.push({ input: await sharp(input).extract({left, top, width, height}).png().toBuffer(), left: left + dx, top: top + dy });
      clearLayers.push({ input: await sharp({create: {width, height, channels: 4, background: 'white'}}).png().toBuffer(), left, top });
    }
    input = await sharp(input).composite(clearLayers).png().toBuffer();
    let width = meta.width, height = meta.pageHeight;
    for (const [axis, cuts] of [['x', [185, 289, 375, 497]], ['y', [176, 264]]]) {
      const layers = []; let previous = 0, offset = 0;
      for (const end of [...cuts, axis === 'x' ? width : height]) {
        const region = axis === 'x' ? { left: previous, top: 0, width: end - previous, height } : { left: 0, top: previous, width, height: end - previous };
        layers.push({ input: await sharp(input).extract(region).png().toBuffer(), left: axis === 'x' ? previous + offset : 0, top: axis === 'y' ? previous + offset : 0 });
        if (cuts.includes(end)) {
          const strip = axis === 'x' ? { left: end, top: 0, width: 1, height } : { left: 0, top: end, width, height: 1 };
          layers.push({ input: await sharp(input).extract(strip).resize(axis === 'x' ? 24 : width, axis === 'y' ? 24 : height, { kernel: 'nearest', fit: 'fill' }).png().toBuffer(), left: axis === 'x' ? end + offset : 0, top: axis === 'y' ? end + offset : 0 });
          offset += 24;
        }
        previous = end;
      }
      if (axis === 'x') layers.push({ input: await sharp(input).extract({left: 0, top: 0, width, height: 90}).png().toBuffer(), left: 0, top: 0 });
      if (axis === 'x') width += offset; else height += offset;
      input = await sharp({ create: { width, height, channels: 4, background: 'white' } }).composite(layers).png().toBuffer();
    }
    input = await sharp(input).composite(labelLayers).png().toBuffer();
    frames.push(await sharp(input).raw().toBuffer());
  }
  await sharp(Buffer.concat(frames), { raw: { width: 700, height: 408 * meta.pages, channels: 4, pageHeight: 408 } }).gif({ delay: meta.delay, loop: meta.loop, dither: 0 }).toFile('public/images/devops-ci-cd-flow-fixed.gif');
})();
