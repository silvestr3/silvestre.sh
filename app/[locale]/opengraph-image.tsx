import { ImageResponse } from "next/og";

export const alt = "Silvestre - Javascript Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a0a0a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        padding: 80,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span
          style={{ fontSize: 96, color: "#ee5e2f", fontWeight: 700 }}
        >
          Silvestre
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
      <div style={{ fontSize: 40, color: "#71717a", marginTop: 16 }}>
        Javascript Developer
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}