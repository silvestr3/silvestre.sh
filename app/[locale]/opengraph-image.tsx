import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Silvestre - Javascript Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function getImageDataUrl() {
  const buffer = readFileSync(join(process.cwd(), "public", "me2.jpg"));
  const base64 = buffer.toString("base64");
  return `data:image/jpeg;base64,${base64}`;
}

export default function Image() {
  const imageSrc = getImageDataUrl();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={imageSrc}
        alt=""
        width={1200}
        height={1800}
        style={{
          position: "absolute",
          top: -250,
          left: 0,
          width: 1200,
          height: 1800,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.55)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          padding: 30,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontSize: 96, color: "#ee5e2f", fontWeight: 700 }}>
            silvestre
          </span>
          <span
            style={{
              fontSize: 96,
              color: "#a1a1aa",
              fontWeight: 700,
              fontFamily: "monospace",
            }}
          >
            .sh
          </span>
        </div>
        <div style={{ fontSize: 40, color: "#e4e4e7", marginTop: 16 }}>
          Javascript Developer
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
