import React from "react";
import type { Reference, Theme } from "@/lib/types";
import { SectionHeading } from "../SectionHeading";
import { ContactLink } from "../ContactLink";
import { LinkedInIcon } from "../../icons/LinkedInIcon";

export const ReferencesSection = ({
  items,
  label,
  linkedinLabel,
  theme,
}: {
  items: Reference[];
  label: string;
  linkedinLabel: string;
  theme: Theme;
}) => {
  return (
    <section>
      <SectionHeading labelColor={theme.sectionLabel} lineColor={theme.sectionLine}>
        {label}
      </SectionHeading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "1rem",
        }}
      >
        {items.map((ref) => (
          <div
            key={ref.name}
            style={{
              background: theme.cardBg,
              border: `1px solid ${theme.border}`,
              borderTop: "3px solid #f59e0b",
              borderRadius: 6,
              padding: "1rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "0.88rem", color: theme.text }}>
              {ref.name}
            </div>
            <div
              style={{
                fontSize: "0.76rem",
                fontWeight: 600,
                color: theme.accentBlue,
                marginTop: "0.1rem",
              }}
            >
              {ref.title}
            </div>
            <div style={{ fontSize: "0.73rem", color: theme.textMuted }}>
              {ref.company}
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              <ContactLink href={ref.linkedin} small>
                <LinkedInIcon small /> {linkedinLabel}
              </ContactLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
