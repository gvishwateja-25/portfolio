// Run from the repository root on macOS:
// swift -module-cache-path /tmp/portfolio-swift-cache scripts/generate-whatsapp-qr.swift
import Foundation
import CoreImage
import AppKit
import Vision

// Use the same URL as the tap link so the two entry points stay in sync.
let source = try String(contentsOfFile: "src/app/page.tsx", encoding: .utf8)
let pattern = try NSRegularExpression(pattern: "whatsapp: \"([^\"]+)\"")
guard let match = pattern.firstMatch(in: source, range: NSRange(source.startIndex..., in: source)),
      let range = Range(match.range(at: 1), in: source) else {
    fatalError("Could not find the portfolio WhatsApp URL")
}
let payload = String(source[range])
let filter = CIFilter(name: "CIQRCodeGenerator")!
filter.setValue(Data(payload.utf8), forKey: "inputMessage")
filter.setValue("M", forKey: "inputCorrectionLevel")
let scale: CGFloat = 8
let margin: CGFloat = 4 * scale
let expanded = filter.outputImage!
    .transformed(by: CGAffineTransform(scaleX: scale, y: scale))
    .transformed(by: CGAffineTransform(translationX: margin, y: margin))
let canvas = CGRect(x: 0, y: 0, width: expanded.extent.width + 2 * margin, height: expanded.extent.height + 2 * margin)
let white = CIImage(color: CIColor(red: 1, green: 1, blue: 1)).cropped(to: canvas)
let image = CIContext(options: [.useSoftwareRenderer: true])
    .createCGImage(expanded.composited(over: white), from: canvas)!
let path = "public/images/whatsapp-chat-qr.png"
let bitmap = NSBitmapImageRep(cgImage: image)
try bitmap.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: path))

// Decode the saved asset, rather than assuming generation succeeded.
let request = VNDetectBarcodesRequest()
request.symbologies = [.qr]
try VNImageRequestHandler(url: URL(fileURLWithPath: path)).perform([request])
guard request.results?.first?.payloadStringValue == payload else {
    fatalError("Saved QR does not match the WhatsApp tap link")
}
print("Generated QR; decoded asset matches the WhatsApp URL and prefilled greeting.")
