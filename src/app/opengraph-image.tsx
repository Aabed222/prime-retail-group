import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Prime Retail Group";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#10213F",
          padding: 72,
          color: "#F7F1E7",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#D4AB63", marginBottom: 24 }}>
          BAKERSFIELD · CENTRAL CALIFORNIA
        </div>
        <div style={{ fontSize: 64, lineHeight: 1.1, maxWidth: 900 }}>
          Prime Retail Group
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#F7F1E7", opacity: 0.8 }}>
          Retail commercial real estate & business opportunities
        </div>
      </div>
    ),
    { ...size },
  );
}
