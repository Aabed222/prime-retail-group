import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1c1917",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              background: "#c45c26",
              color: "#f7f3eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            PRG
          </div>
          <div style={{ display: "flex", flexDirection: "column", color: "#f7f3eb" }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
              PRIME RETAIL
            </div>
            <div style={{ fontSize: 16, letterSpacing: 6, color: "#b08d3a" }}>GROUP</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 52, fontWeight: 600, color: "#f7f3eb", lineHeight: 1.15, maxWidth: 900 }}>
            Commercial real estate for Bakersfield & the Central Valley
          </div>
          <div style={{ fontSize: 24, color: "#a8a29e" }}>
            Retail leasing · Tenant rep · Investment · Ownership
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
