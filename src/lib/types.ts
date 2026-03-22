import { z } from "zod";

export type Lang = "fi" | "en";

export type Theme = {
  pageBg: string;
  cardBg: string;
  border: string;
  text: string;
  textMuted: string;
  sectionLabel: string;
  sectionLine: string;
  badgeBg: string;
  badgeText: string;
  coreBadgeBg: string;
  coreBadgeText: string;
  accentBlue: string;
  timelineLine: string;
};

export const skillSchema = z.object({
  name: z.string().min(1),
  level: z.number().int().min(1).max(5),
});
export type Skill = z.infer<typeof skillSchema>;

export const degreeSchema = z.object({
  degree: z.string().min(1),
  school: z.string().min(1),
  years: z.string().regex(/^(\d{4}|\d{2}\/\d{4}) – (\d{4}|\d{2}\/\d{4})$/),
});
export type Degree = z.infer<typeof degreeSchema>;

export const jobSchema = z.object({
  title: z.string().min(1),
  company: z.string().min(1),
  period: z.string().regex(/^\d{2}\/\d{4} – (\d{2}\/\d{4}|present|nykyinen)$/),
  bullets: z.array(z.string().min(5)).min(2).max(6),
});
export type Job = z.infer<typeof jobSchema>;

const verificationSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("pr"), url: z.url() }),
  z.object({ type: z.literal("linkedin_post"), url: z.url() }),
]);

export const referenceSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  title: z.string().min(1),
  company: z.string().min(1),
  linkedin: z
    .url()
    .refine((url) => url.includes("linkedin.com/in/"), {
      message: "Must be a LinkedIn profile URL",
    }),
  quote: z.string().min(10),
  verification: verificationSchema,
});
export type Reference = z.infer<typeof referenceSchema>;
