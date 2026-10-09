import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// The preview card shown when your link is shared on LinkedIn, Slack, iMessage, etc.
export const alt = `${site.name}: portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #1d5bf0, #4a8bff)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(255,255,255,0.25)",
              border: "3px solid rgba(255,255,255,0.6)",
            }}
          />
          <div style={{ fontSize: 40, fontWeight: 800 }}>{site.name}</div>
        </div>

        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 980,
          }}
        >
          {site.tagline}
        </div>

        <div style={{ fontSize: 30, opacity: 0.85 }}>
          {site.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size }
  );
}