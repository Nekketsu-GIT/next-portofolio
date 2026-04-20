import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "José DACOSTA — Développeur Full Stack & Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d1117 0%, #0a1628 100%)",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 8,
            height: "100%",
            background: "#063672",
          }}
        />

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            right: 120,
            top: 80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "1px solid rgba(99,152,216,0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            top: 20,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "1px solid rgba(99,152,216,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 180,
            top: 160,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "rgba(6,54,114,0.3)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 80,
            paddingRight: 80,
          }}
        >
          {/* Monogram */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 40,
            }}
          >
            <span style={{ color: "#ffffff", fontSize: 28, fontWeight: 700 }}>J</span>
            <span style={{ color: "#9C824A", fontSize: 28, fontWeight: 700 }}>&lt;/&gt;</span>
            <span style={{ color: "#8bb1d8", fontSize: 28, fontWeight: 700 }}>sé Dacosta</span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: 8,
            }}
          >
            Full Stack Developer
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#8bb1d8",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            &amp; Builder
          </div>

          {/* Gold rule */}
          <div
            style={{
              width: 100,
              height: 4,
              background: "#9C824A",
              borderRadius: 2,
              marginBottom: 32,
            }}
          />

          {/* Subtitle */}
          <div
            style={{
              fontSize: 24,
              color: "#94a3b8",
              marginBottom: 48,
            }}
          >
            FastAPI · Next.js · Anthropic SDK · Docker · Keycloak
          </div>

          {/* Availability badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(6,54,114,0.5)",
              border: "1px solid rgba(139,177,216,0.3)",
              borderRadius: 24,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 24,
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#22c55e",
              }}
            />
            <span style={{ color: "#86efac", fontSize: 18, fontWeight: 600 }}>
              Available for freelance missions
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 80,
            color: "#4b5563",
            fontSize: 16,
          }}
        >
          jose-pascal.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
