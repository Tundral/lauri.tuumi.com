import type { Lang } from "./types";

export const ui: Record<Lang, {
  subtitle: string;
  summary: string;
  sections: {
    education: string;
    skills: string;
    experience: string;
    references: string;
  };
  currentLabel: string;
  linkedin: string;
  toggleLabel: string;
}> = {
  fi: {
    subtitle: "Ohjelmistokehittäjä\u00a0/\u00a0Tietojärjestelmäasiantuntija",
    summary:
      "Full stack -ohjelmistokehittäjä, jolla on vahva painotus tyyppiturvallisuuteen ja koodikvaliteettiin TypeScript-ekosysteemissä. Kokemusta koko kehityskaaresta – CI/CD-automaatiosta ja pilvipalveluista moderneihin React- ja Next.js-frontendeihin. Kiinnostunut selkeästä arkkitehtuurista, kehittäjäergonomiasta ja AI-avusteisesta kehityksestä.",
    sections: {
      education: "Koulutus",
      skills: "Taidot",
      experience: "Työkokemus",
      references: "Suosittelijat",
    },
    currentLabel: "nykyinen",
    linkedin: "LinkedIn",
    toggleLabel: "EN",
  },
  en: {
    subtitle: "Software Developer\u00a0/\u00a0IT Systems Specialist",
    summary:
      "Full stack software developer and tech lead with a strong focus on type safety and code quality in the TypeScript ecosystem. Experience across the full development lifecycle — from CI/CD automation and cloud services to modern React and Next.js frontends. Focused on designing enabling abstractions that keep teams productive without rigid over-engineering — establishing shared patterns that reduce friction while preserving architectural flexibility. Interested in developer ergonomics, principled architecture, and AI-assisted development.",
    sections: {
      education: "Education",
      skills: "Skills",
      experience: "Work Experience",
      references: "References",
    },
    currentLabel: "present",
    linkedin: "LinkedIn",
    toggleLabel: "FI",
  },
};
