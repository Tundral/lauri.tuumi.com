import React from "react";
import type { Skill, Theme } from "@/lib/types";
import { SectionHeading } from "../SectionHeading";

export const SkillsSection = ({
  items,
  label,
  theme,
  tierLabels,
}: {
  items: Skill[];
  label: string;
  theme: Theme;
  tierLabels: { core: string; familiar: string };
}) => {
  const coreSkills = items.filter((s) => s.level >= 4);
  const familiarSkills = items.filter((s) => s.level < 4);

  const renderTier = (skills: Skill[], tierLabel: string) => (
    <div style={{ marginBottom: "1.25rem" }}>
      <div
        style={{
          fontSize: "0.68rem",
          fontWeight: 700,
          color: theme.sectionLabel,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "0.5rem",
        }}
      >
        {tierLabel}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        {skills.map((s) => (
          <span
            key={s.name}
            style={{
              display: "inline-block",
              background: theme.badgeBg,
              color: theme.badgeText,
              padding: "0.35rem 0.65rem",
              borderRadius: 4,
              fontSize: "0.78rem",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section>
      <SectionHeading labelColor={theme.sectionLabel} lineColor={theme.sectionLine}>
        {label}
      </SectionHeading>
      {renderTier(coreSkills, tierLabels.core)}
      {renderTier(familiarSkills, tierLabels.familiar)}
    </section>
  );
};
