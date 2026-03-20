import { z } from "zod";

const uiEntrySchema = z.object({
  subtitle: z.string().min(1),
  summary: z.array(z.string().min(10)).length(3),
  sections: z.object({
    education: z.string().min(1),
    skills: z.string().min(1),
    experience: z.string().min(1),
    references: z.string().min(1),
  }),
  skillTiers: z.object({
    core: z.string().min(1),
    familiar: z.string().min(1),
  }),
  currentLabel: z.string().min(1),
  linkedin: z.string().min(1),
  toggleLabel: z.enum(["FI", "EN"]),
});

const uiSchema = z.object({
  fi: uiEntrySchema,
  en: uiEntrySchema,
});

export const ui = uiSchema.parse({
  fi: {
    subtitle: "Ohjelmistokehittäjä",
    summary: [
      "Full stack -ohjelmistokehittäjä ja tekninen vastaava koko kehityskaarella – arkkitehtuurista ja API-suunnittelusta ilmaisuvoimaisella, ergonomisella TypeScriptillä nykyaikaisiin Node.js- ja Next.js-sovelluksiin.",
      "Keskityn tiimien tuottavuuteen ilman ylisuunnittelua: vahvat yhteiset käytänteet, hyvin suunnitellut abstraktiot ja harkitut ratkaisut siitä, milloin lisätä rakenetta ja milloin pysyä yksinkertaisella.",
      "Kiinnostunut kehittäjäergonomiasta, periaatteellisesta arkkitehtuurista ja skaalautuvasta AI-avusteisesta kehityksestä.",
    ],
    sections: {
      education: "Koulutus",
      skills: "Taidot",
      experience: "Työkokemus",
      references: "Suosittelijat",
    },
    skillTiers: {
      core: "Ydinteknologiat",
      familiar: "Myös kokemusta",
    },
    currentLabel: "nykyinen",
    linkedin: "LinkedIn",
    toggleLabel: "EN",
  },
  en: {
    subtitle: "Software Developer",
    summary: [
      "Full stack software developer and tech lead with experience across the full development lifecycle — from architecture and API design with expressive, ergonomic TypeScript, for modern Node.js and Next.js applications.",
      "I focus on keeping teams productive without over-engineering: establishing shared conventions, writing enabling abstractions, and making deliberate calls about when to add structure and when to stay simple.",
      "Interested in developer ergonomics, principled architecture, and scalable AI-assisted development.",
    ],
    sections: {
      education: "Education",
      skills: "Skills",
      experience: "Work Experience",
      references: "References",
    },
    skillTiers: {
      core: "Core stack",
      familiar: "Also worked with",
    },
    currentLabel: "present",
    linkedin: "LinkedIn",
    toggleLabel: "FI",
  },
});
