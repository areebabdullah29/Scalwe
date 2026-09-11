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
            "linear-gradient(135deg, #0a0a0a 0%, #111111 60%, #080808 100%)",
          color: "#f5f5f2",
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
              background: "linear-gradient(135deg, #c9a35f 0%, #e6c98a 100%)",
              color: "#171208",
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
            color: "#8f8f8f",
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
