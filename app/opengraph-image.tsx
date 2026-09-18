import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = "Scalwe — Engineering What's Next";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0b",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "#6d5bf6",
              color: "#ffffff",
              fontSize: 34,
              fontWeight: 900,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 40, fontWeight: 800 }}>Scalwe</div>
        </div>
        <div style={{ fontSize: 60, fontWeight: 800, maxWidth: 900, lineHeight: 1.05, letterSpacing: -2 }}>
          Engineering what&apos;s next.
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 26,
            color: "#9a9aa2",
            maxWidth: 820,
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
