import { z } from "zod";

const noteItemSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(10),
  link: z.object({ href: z.url(), label: z.string().min(1) }).optional(),
});

const uiEntrySchema = z.object({
  subtitle: z.string().min(1),
  summary: z.array(z.string().min(10)).length(3),
  sections: z.object({
    education: z.string().min(1),
    skills: z.string().min(1),
    experience: z.string().min(1),
    references: z.string().min(1),
    referencesNote: z.string().min(1),
  }),
  skillTiers: z.object({
    core: z.string().min(1),
    familiar: z.string().min(1),
  }),
  currentLabel: z.string().min(1),
  linkedin: z.string().min(1),
  toggleLabel: z.enum(["FI", "EN"]),
  referenceVerification: z.object({
    pr: z.string().min(1),
    linkedin_post: z.string().min(1),
    howToVerifyLink: z.string().min(1),
    dialog: z.object({
      title: z.string().min(1),
      body: z.array(z.string().min(1)).length(3),
      close: z.string().min(1),
    }),
  }),
  notes: z.object({
    heading: z.string().min(1),
    items: z.array(noteItemSchema).min(1),
  }),
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
      referencesNote: "Kiitos Villelle, Mikolle, Jannelle ja Timolle julkisesta suosituksesta.",
    },
    skillTiers: {
      core: "Ydinteknologiat",
      familiar: "Myös kokemusta",
    },
    currentLabel: "nykyinen",
    linkedin: "LinkedIn",
    toggleLabel: "EN",
    referenceVerification: {
      pr: "Katso GitHub PR →",
      linkedin_post: "Katso LinkedIn-julkaisu →",
      howToVerifyLink: "Miten vahvistaa →",
      dialog: {
        title: "Miten vahvistaminen toimii",
        body: [
          "Jokainen suosittelija on vahvistanut suosituksensa julkisesti — joko avaamalla pull requestin tämän CV:n GitHub-repositorioon tai julkaisemalla viestin LinkedInissä.",
          "GitHub PR on sidottu tekijän GitHub-identiteettiin ja näkyy pysyvästi repositorion historiassa. LinkedIn-julkaisu on sidottu heidän ammatilliseen profiiliinsa.",
          "Klikkaa minkä tahansa kortin linkkiä tarkastaaksesi lähteen suoraan.",
        ],
        close: "Sulje",
      },
    },
    notes: {
      heading: "Tämä CV",
      items: [
        {
          title: "Lähdekoodi",
          body: "Tämän CV:n lähdekoodi on avoin — katso miten se on rakennettu.",
          link: { href: "https://github.com", label: "Katso GitHubissa →" },
        },
        {
          title: "Staattinen Next.js-vienti",
          body: "Julkaistu staattisena sivustona (GitHub Pages / Cloudflare Pages) — ei backendiä, ei hyökkäyspinta-alaa. Oikea ratkaisu yksinkertaiselle sivustolle.",
        },
        {
          title: "Yhteydenotto-UX",
          body: "Yksi klikkaus kopioi sähköpostiosoitteen; mailto:-linkki avaa sähköpostiohjelman suoraan. Ei etsimistä — vain yhteydenotto.",
        },
        {
          title: "Luottamus & Integriteetti",
          body: "Tämän CV:n suositukset ovat julkisesti vahvistettavissa — jokainen linkitetty tekijän itsensä avaamaan GitHub PR:ään tai LinkedIn-julkaisuun. Luottamus ilman vahvistusta on pelkkä oletus; julkisesti tarkastettavat, identiteettiin sidotut väitteet ovat modernin digitaalisen infrastruktuurin perusta.",
        },
      ],
    },
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
      referencesNote: "Thank you to Ville, Mikko, Janne, and Timo for vouching for me publicly.",
    },
    skillTiers: {
      core: "Core stack",
      familiar: "Also worked with",
    },
    currentLabel: "present",
    linkedin: "LinkedIn",
    toggleLabel: "FI",
    referenceVerification: {
      pr: "View GitHub PR →",
      linkedin_post: "View LinkedIn Post →",
      howToVerifyLink: "How to verify →",
      dialog: {
        title: "How verification works",
        body: [
          "Each reference has verified their recommendation publicly — either by opening a pull request against this CV's GitHub repository, or by posting on LinkedIn.",
          "A GitHub PR is tied to the author's GitHub identity and is permanently visible in the repository's history. A LinkedIn post is tied to their professional profile.",
          "Click the link on any card to inspect the source directly.",
        ],
        close: "Close",
      },
    },
    notes: {
      heading: "This CV",
      items: [
        {
          title: "Source Code",
          body: "The source for this CV is open — see how it's built.",
          link: { href: "https://github.com", label: "View on GitHub →" },
        },
        {
          title: "Static Next.js Export",
          body: "Deployed as a static site (GitHub Pages / Cloudflare Pages) — no backend, no attack surface. The right call for a simple site.",
        },
        {
          title: "Contact UX",
          body: "One click copies the email address; a mailto: link opens your mail client directly. No hunting — just contact.",
        },
        {
          title: "Trust & Integrity",
          body: "Recommendations on this CV are publicly verifiable — each linked to a GitHub PR or LinkedIn post authored by the person themselves. Trust without verification is just assumption; publicly auditable, identity-tied claims are the backbone of modern digital infrastructure.",
        },
      ],
    },
  },
});
