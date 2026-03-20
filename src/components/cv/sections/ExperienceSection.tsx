import React from "react";
import type { Job, Theme } from "@/lib/types";
import { SectionHeading } from "../SectionHeading";

export function ExperienceSection({
  items,
  label,
  theme,
}: {
  items: Job[];
  label: string;
  theme: Theme;
}) {
  return (
    <section>
      <SectionHeading labelColor={theme.sectionLabel} lineColor={theme.sectionLine}>
        {label}
      </SectionHeading>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
        {items.map((job) => (
          <div
            key={job.company + job.period}
            style={{
              position: "relative",
              paddingLeft: "1.25rem",
              borderLeft: `2px solid ${theme.timelineLine}`,
            }}
          >
            {/* Diamond marker */}
            <div
              style={{
                position: "absolute",
                left: -6,
                top: 6,
                width: 10,
                height: 10,
                background: "#f59e0b",
                transform: "rotate(45deg)",
              }}
            />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.93rem", color: theme.text }}>
                  {job.title}
                </div>
                <div style={{ fontSize: "0.78rem", fontWeight: 600, color: theme.accentBlue }}>
                  {job.company}
                </div>
              </div>
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  background: theme.badgeBg,
                  color: theme.badgeText,
                  padding: "0.2rem 0.55rem",
                  borderRadius: 4,
                  whiteSpace: "nowrap",
                  letterSpacing: "0.04em",
                }}
              >
                {job.period}
              </span>
            </div>

            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  style={{
                    display: "flex",
                    gap: "0.45rem",
                    fontSize: "0.8rem",
                    color: theme.textMuted,
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: "#f59e0b", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
