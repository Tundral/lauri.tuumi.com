import { z } from "zod";
import { skillSchema } from "../types";

const skillsSchema = z.object({
  fi: z.array(skillSchema),
  en: z.array(skillSchema),
});

export const skills = skillsSchema.parse({
  fi: [
    { name: "Next.js", level: 4 },
    { name: "Node.js / Express.js", level: 4 },
    { name: "Zod / TypeScript", level: 5 },
    { name: "SQL-tietokannat", level: 4 },
    { name: "CI/CD", level: 3 },
    { name: "AWS", level: 2 },
    { name: "C# (.NET Core)", level: 3 },
    { name: "Angular", level: 2 },
    { name: "Python", level: 2 },
    { name: "Java", level: 2 },
  ],
  en: [
    { name: "Next.js", level: 4 },
    { name: "Node.js / Express.js", level: 4 },
    { name: "Zod / TypeScript", level: 5 },
    { name: "SQL Databases", level: 4 },
    { name: "CI/CD", level: 3 },
    { name: "AWS", level: 2 },
    { name: "C# (.NET Core)", level: 3 },
    { name: "Angular", level: 2 },
    { name: "Python", level: 2 },
    { name: "Java", level: 2 },
  ],
});
