import React from "react";
import type { Skill, Theme } from "@/lib/types";
import { SectionHeading } from "../SectionHeading";
import { SkillBar } from "../SkillBar";

export const SkillsSection = ({
  items,
  label,
  theme,
}: {
  items: Skill[];
  label: string;
  theme: Theme;
}) => {
  return (
    <section>
      <SectionHeading labelColor={theme.sectionLabel} lineColor={theme.sectionLine}>
        {label}
      </SectionHeading>
      {items.map((s) => (
        <SkillBar
          key={s.name}
          name={s.name}
          level={s.level}
          nameColor={theme.textMuted}
          trackColor={theme.skillTrack}
        />
      ))}
    </section>
  );
};
