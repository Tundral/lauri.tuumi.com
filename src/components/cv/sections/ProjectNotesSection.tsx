import React from "react";
import type { Theme } from "@/lib/types";
import { SectionHeading } from "../SectionHeading";

type NoteItem = {
  title: string;
  body: string;
  link?: { href: string; label: string };
};

export const ProjectNotesSection = ({
  heading,
  items,
  theme,
}: {
  heading: string;
  items: NoteItem[];
  theme: Theme;
}) => {
  return (
    <section>
      <SectionHeading labelColor={theme.sectionLabel} lineColor={theme.sectionLine}>
        {heading}
      </SectionHeading>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: theme.cardBg,
              border: `1px solid ${theme.border}`,
              borderTop: "3px solid #f59e0b",
              borderRadius: 6,
              padding: "0.85rem 1rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "0.82rem",
                color: theme.text,
                marginBottom: "0.35rem",
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                fontSize: "0.73rem",
                color: theme.textMuted,
                lineHeight: 1.5,
              }}
            >
              {item.body}
            </div>
            {item.link && (
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "0.5rem",
                  fontSize: "0.73rem",
                  fontWeight: 600,
                  color: theme.accentBlue,
                  textDecoration: "none",
                }}
              >
                {item.link.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
