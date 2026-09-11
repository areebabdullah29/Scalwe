import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = "Scalwe — AI Development & Digital Engineering";
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
          background:
            "linear-gradient(135deg, #080710 0%, #131129 60%, #05040b 100%)",
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
              borderRadius: 18,
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              color: "#ffffff",
              fontSize: 34,
              fontWeight: 900,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 40, fontWeight: 800 }}>Scalwe</div>
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, maxWidth: 900, lineHeight: 1.1 }}>
          From AI ideas to scalable digital products.
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 26,
            color: "#94a3b8",
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
