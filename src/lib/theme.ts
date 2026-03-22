export const buildTheme = (dark: boolean) => {
  return {
    pageBg:       dark ? "#0f172a" : "#f1f5f9",
    cardBg:       dark ? "#1e293b" : "#ffffff",
    border:       dark ? "#334155" : "#e2e8f0",
    text:         dark ? "#f1f5f9" : "#0f172a",
    textMuted:    dark ? "#cbd5e1" : "#94a3b8",
    sectionLabel: dark ? "#94a3b8" : "#334155",
    sectionLine:  dark ? "#334155" : "#e2e8f0",
    skillTrack:   dark ? "#334155" : "#e2e8f0",
    badgeBg:      dark ? "#334155" : "#e2e8f0",
    badgeText:    dark ? "#94a3b8" : "#475569",
    coreBadgeBg:  dark ? "#334155" : "#e2e8f0",
    coreBadgeText: dark ? "#fb923c" : "#c2410c",
    accentBlue:   dark ? "#60a5fa" : "#1e40af",
    timelineLine: dark ? "#1e40af" : "#1e40af",
  };
};
