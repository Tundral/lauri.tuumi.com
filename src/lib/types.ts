import type { buildTheme } from "./theme";

export type Lang = "fi" | "en";
export type Theme = ReturnType<typeof buildTheme>;

export type Skill = {
  name: string;
  level: number;
};

export type Degree = {
  degree: string;
  school: string;
  years: string;
};

export type Job = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export type Reference = {
  name: string;
  title: string;
  company: string;
  linkedin: string;
};
