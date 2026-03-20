import type { Lang, Skill } from "../types";

export const skills: Record<Lang, Skill[]> = {
  fi: [
    { name: "Zod / TypeScript", level: 5 },
    { name: "Next.js", level: 4 },
    { name: "Node.js / Express.js", level: 4 },
    { name: "SQL-tietokannat", level: 4 },
    { name: "CI/CD", level: 3 },
    { name: "C# (.NET Core)", level: 3 },
    { name: "AWS", level: 2 },
    { name: "Angular", level: 2 },
    { name: "Python", level: 2 },
    { name: "Java", level: 2 },
  ],
  en: [
    { name: "Zod / TypeScript", level: 5 },
    { name: "Next.js", level: 4 },
    { name: "Node.js / Express.js", level: 4 },
    { name: "SQL Databases", level: 4 },
    { name: "CI/CD", level: 3 },
    { name: "C# (.NET Core)", level: 3 },
    { name: "AWS", level: 2 },
    { name: "Angular", level: 2 },
    { name: "Python", level: 2 },
    { name: "Java", level: 2 },
  ],
};
