import React from "react";
import { EmailIcon } from "../icons/EmailIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";

export function Header({
  subtitle,
  summary,
  toggleLabel,
  linkedinUrl,
  onToggleLang,
  onOpenEmail,
}: {
  subtitle: string;
  summary: string;
  toggleLabel: string;
  linkedinUrl: string;
  onToggleLang: () => void;
  onOpenEmail: () => void;
}) {
  return (
    <header
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0f172a",
        color: "#fff",
      }}
    >
      {/* Geometric background */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        viewBox="0 0 1200 220"
        preserveAspectRatio="xMidYMid slice"
      >
        <polygon points="780,0 1200,0 1200,220 880,220" fill="#1e3a8a" />
        <polygon points="910,0 1060,0 1160,220 1010,220" fill="#f59e0b" />
        <polygon points="1080,0 1200,0 1200,220 1180,220" fill="#1e40af" />
      </svg>

      {/* Language toggle */}
      <button
        onClick={onToggleLang}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          zIndex: 20,
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: 6,
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          padding: "0.35rem 0.75rem",
          cursor: "pointer",
        }}
      >
        {toggleLabel}
      </button>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1000,
          margin: "0 auto",
          padding: "2.5rem 2rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "1.75rem",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 108,
            height: 108,
            borderRadius: "50%",
            border: "4px solid #f59e0b",
            background: "#1e293b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.6rem",
            fontWeight: 900,
            color: "#f59e0b",
            flexShrink: 0,
            letterSpacing: "-0.02em",
          }}
        >
          LT
        </div>

        {/* Name + title + contact */}
        <div>
          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 3.25rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            <span style={{ color: "#ffffff" }}>Lauri </span>
            <span style={{ color: "#f59e0b" }}>Tuumi</span>
          </h1>
          <p
            style={{
              marginTop: "0.45rem",
              fontSize: "0.95rem",
              color: "#94a3b8",
              fontWeight: 500,
            }}
          >
            {subtitle}
          </p>
          <p
            style={{
              marginTop: "0.6rem",
              fontSize: "0.82rem",
              color: "#94a3b8",
              fontWeight: 400,
              maxWidth: "52ch",
              lineHeight: 1.6,
            }}
          >
            {summary}
          </p>
          <div
            style={{
              marginTop: "0.9rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.65rem",
            }}
          >
            <button
              onClick={onOpenEmail}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "#f59e0b",
                color: "#0f172a",
                border: "none",
                borderRadius: 6,
                padding: "0.45rem 1rem",
                fontSize: "0.82rem",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              <EmailIcon /> Email me
            </button>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "rgba(255,255,255,0.08)",
                color: "#cbd5e1",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 6,
                padding: "0.45rem 1rem",
                fontSize: "0.82rem",
                fontWeight: 600,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
