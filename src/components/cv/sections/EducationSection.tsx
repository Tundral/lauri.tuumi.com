import React from "react";
import type { Degree, Theme } from "@/lib/types";
import { SectionHeading } from "../SectionHeading";

export const EducationSection = ({
  items,
  label,
  theme,
}: {
  items: Degree[];
  label: string;
  theme: Theme;
}) => {
  return (
    <section>
      <SectionHeading labelColor={theme.sectionLabel} lineColor={theme.sectionLine}>
        {label}
      </SectionHeading>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {items.map((edu) => (
          <div
            key={edu.degree}
            style={{ borderLeft: "3px solid #f59e0b", paddingLeft: "0.875rem" }}
          >
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#d97706",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {edu.years}
            </div>
            <div
              style={{
                marginTop: "0.15rem",
                fontSize: "0.83rem",
                fontWeight: 600,
                color: theme.text,
                lineHeight: 1.35,
              }}
            >
              {edu.degree}
            </div>
            <div style={{ fontSize: "0.73rem", color: theme.textMuted, marginTop: "0.1rem" }}>
              {edu.school}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
