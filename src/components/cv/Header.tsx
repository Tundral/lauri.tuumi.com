import React from "react";
import Link from "next/link";
import { LinkedInIcon } from "../icons/LinkedInIcon";

export const Header = ({
  subtitle,
  summary,
  toggleLabel,
  linkedinUrl,
  otherLangHref,
  emailSlot,
  downloadPdfSlot,
}: {
  subtitle: string;
  summary: string[];
  toggleLabel: string;
  linkedinUrl: string;
  otherLangHref: string;
  emailSlot?: React.ReactNode;
  downloadPdfSlot?: React.ReactNode;
}) => {
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
              color: "#cbd5e1",
              fontWeight: 500,
            }}
          >
            {subtitle}
          </p>
          <Link
            href={otherLangHref}
            style={{
              display: "inline-block",
              marginTop: "0.3rem",
              color: "#94a3b8",
              fontSize: "0.78rem",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            {toggleLabel}
          </Link>
          {summary.map((para, i) => (
            <p
              key={i}
              style={{
                marginTop: i === 0 ? "0.6rem" : "0.4rem",
                fontSize: "0.82rem",
                color: "#cbd5e1",
                fontWeight: 400,
                maxWidth: "52ch",
                lineHeight: 1.6,
              }}
            >
              {para}
            </p>
          ))}
          <div
            style={{
              marginTop: "0.9rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.65rem",
            }}
          >
            {emailSlot}

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

            {downloadPdfSlot}
          </div>
        </div>
      </div>
    </header>
  );
};
