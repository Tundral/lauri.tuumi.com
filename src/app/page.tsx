"use client";
import React, { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES & TRANSLATIONS
// ─────────────────────────────────────────────────────────────────────────────

type Lang = "fi" | "en";

const ui = {
  fi: {
    subtitle: "Ohjelmistokehittäjä\u00a0/\u00a0Tietojärjestelmäasiantuntija",
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

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const contact = {
  phone: "+358 404 862686",
  email: "lauri@tuumi.com",
  location: "28100 Pori",
};

const skills: Record<Lang, { name: string; level: number }[]> = {
  fi: [
    { name: "Zod / TypeScript", level: 5 },
    { name: "Next.js", level: 4 },
    { name: "Backend (Node.JS, REST)", level: 4 },
    { name: "Express.js", level: 4 },
    { name: "React", level: 4 },
    { name: "Koodikvaliteetti", level: 4 },
    { name: "AI-ohjelmistokehitys", level: 4 },
    { name: "SQL-tietokannat", level: 4 },
    { name: "DevOps", level: 3 },
    { name: "C# (.NET Core)", level: 3 },
    { name: "AWS", level: 2 },
    { name: "Angular", level: 2 },
    { name: "Python", level: 2 },
    { name: "Java", level: 2 },
  ],
  en: [
    { name: "Zod / TypeScript", level: 5 },
    { name: "Next.js", level: 4 },
    { name: "Backend (Node.JS, REST)", level: 4 },
    { name: "Express.js", level: 4 },
    { name: "React", level: 4 },
    { name: "Code Quality", level: 4 },
    { name: "AI Software Development", level: 4 },
    { name: "SQL Databases", level: 4 },
    { name: "DevOps", level: 3 },
    { name: "C# (.NET Core)", level: 3 },
    { name: "AWS", level: 2 },
    { name: "Angular", level: 2 },
    { name: "Python", level: 2 },
    { name: "Java", level: 2 },
  ],
};

const education: Record<Lang, { degree: string; school: string; years: string }[]> = {
  fi: [
    {
      degree: "Tietojenkäsittelyn Tradenomitutkinto",
      school: "Satakunnan Ammattikorkeakoulu",
      years: "2019 – 2023",
    },
    {
      degree: "Ylioppilastutkinto",
      school: "Tampereen Lyseon Lukio",
      years: "2014 – 2018",
    },
  ],
  en: [
    {
      degree: "Bachelor of Business Administration, Business IT",
      school: "Satakunta University of Applied Sciences",
      years: "2019 – 2023",
    },
    {
      degree: "Finnish Matriculation Examination",
      school: "Tampere Lyseo Upper Secondary School",
      years: "2014 – 2018",
    },
  ],
};

const experience: Record<Lang, { title: string; company: string; period: string; bullets: string[] }[]> = {
  fi: [
    {
      title: "Software Developer",
      company: "Teollisuuden Voima Oyj",
      period: "12/2024 – nykyinen",
      bullets: [
        "Full stack -kehitys Next.js-, Node.js- ja Express-teknologioilla",
        "Vahva painotus tietojen eheyteen Zodin ja TypeScript-tyypityksen avulla",
        "Kehittäjäergonomian ja koodikvaliteetin standardisoinnin edistäminen",
      ],
    },
    {
      title: "Software Engineer",
      company: "Dyme Solutions Oy",
      period: "05/2023 – 10/2023",
      bullets: [
        "DevOps: käänneautomaatiointi ja testausautomaatiointi (Groovy), CI/CD-putken kehitys ja versiointiratkaisut",
        "Jenkins-ympäristön Infrastructure as Code (IaC) Job DSL:llä",
        "Docker-ympäristön haavoittuvuusskannauksen integrointi (Jenkins, Trivy)",
        "AWS Lambda -palvelukomponentit (TypeScript, DynamoDB, SQS)",
      ],
    },
    {
      title: "Cloud Developer",
      company: "Basware Oyj",
      period: "05/2022 – 10/2022",
      bullets: [
        "Python-konsoliapplikaation laajentaminen",
        "Python Flask -backend AWS Lambdassa DynamoDB-integraatiolla",
        "React-käyttöliittymän suunnittelu ja ohjelmointi",
        "Angular-käyttöliittymän suunnittelu ja ohjelmointi",
        "Yksikkötestit Pytest-kehyksellä, E2E-testit Cypress-alustalla",
      ],
    },
    {
      title: "Tietojärjestelmäasiantuntija",
      company: "Suomen Euromaster Oy",
      period: "05/2021 – 05/2022",
      bullets: [
        "Myyntijärjestelmän tuki, ongelmien diagnosointi ja raportointi",
        "SQL-kyselyihin perustuva raportointi",
        "Kehittynyt Excel-makrokehitys",
        "AutoHotkey-skripti tietoautomaatioon (RPA)",
        "C# .NET Core -konsoliapplikaatio tilausten käsittelyyn",
        "Google Sheets -varastonhallintajärjestelmä Apps Scriptillä (JavaScript)",
      ],
    },
  ],
  en: [
    {
      title: "Software Developer",
      company: "Teollisuuden Voima Oyj",
      period: "12/2024 – present",
      bullets: [
        "Full stack development with Next.js, Node.js, and Express",
        "Strong emphasis on data integrity with Zod and TypeScript typing",
        "Promoting developer ergonomics and standardisation of code quality",
      ],
    },
    {
      title: "Software Engineer",
      company: "Dyme Solutions Oy",
      period: "05/2023 – 10/2023",
      bullets: [
        "DevOps: build and test automation (Groovy), CI/CD pipeline development and versioning solutions",
        "Jenkins environment Infrastructure as Code (IaC) with Job DSL",
        "Integration of vulnerability scanning for Docker environments (Jenkins, Trivy)",
        "AWS Lambda service components (TypeScript, DynamoDB, SQS)",
      ],
    },
    {
      title: "Cloud Developer",
      company: "Basware Oyj",
      period: "05/2022 – 10/2022",
      bullets: [
        "Extending a Python console application",
        "Python Flask backend on AWS Lambda with DynamoDB integration",
        "React UI design and programming",
        "Angular UI design and programming",
        "Unit tests with Pytest, E2E tests with Cypress",
      ],
    },
    {
      title: "IT Systems Specialist",
      company: "Suomen Euromaster Oy",
      period: "05/2021 – 05/2022",
      bullets: [
        "Sales system support, issue diagnosis and reporting",
        "SQL query-based reporting",
        "Advanced Excel macro development",
        "AutoHotkey script for data automation (RPA)",
        "C# .NET Core console application for order processing",
        "Google Sheets inventory management system with Apps Script (JavaScript)",
      ],
    },
  ],
};

const references: Record<Lang, { name: string; title: string; company: string; linkedin: string }[]> = {
  fi: [
    {
      name: "Sakari Peltomäki",
      title: "Manager, Product Development",
      company: "Basware Oyj",
      linkedin: "https://www.linkedin.com/in/sakari-peltom%C3%A4ki-43ba68151/",
    },
    {
      name: "Timo Ahvonen",
      title: "IT-johtaja",
      company: "Suomen Euromaster Oy",
      linkedin: "https://www.linkedin.com/in/ahvonen/",
    },
  ],
  en: [
    {
      name: "Sakari Peltomäki",
      title: "Manager, Product Development",
      company: "Basware Oyj",
      linkedin: "https://www.linkedin.com/in/sakari-peltom%C3%A4ki-43ba68151/",
    },
    {
      name: "Timo Ahvonen",
      title: "IT Director",
      company: "Suomen Euromaster Oy",
      linkedin: "https://www.linkedin.com/in/ahvonen/",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1.25rem",
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          background: "#f59e0b",
          transform: "rotate(45deg)",
          flexShrink: 0,
        }}
      />
      <h2
        style={{
          fontSize: "0.68rem",
          fontWeight: 800,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#334155",
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </h2>
      <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
    </div>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div style={{ marginBottom: "0.65rem" }}>
      <div
        style={{ fontSize: "0.8rem", color: "#475569", marginBottom: "0.25rem" }}
      >
        {name}
      </div>
      <div
        style={{
          height: 5,
          background: "#e2e8f0",
          borderRadius: 9999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${(level / 5) * 100}%`,
            background: "linear-gradient(to right, #1e40af, #3b82f6)",
            borderRadius: 9999,
          }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function CVPage() {
  const [lang, setLang] = useState<Lang>("fi");
  const t = ui[lang];

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9" }}>
      {/* ── HERO HEADER ── */}
      <header
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#0f172a",
          color: "#fff",
        }}
      >
        {/* Geometric background — diagonal racing stripes */}
        <svg
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          viewBox="0 0 1200 220"
          preserveAspectRatio="xMidYMid slice"
        >
          <polygon points="440,0 1200,0 1200,220 540,220" fill="#1e3a8a" />
          <polygon points="530,0 630,0 730,220 630,220" fill="#f59e0b" />
          <polygon points="650,0 750,0 850,220 750,220" fill="#1e40af" />
          <polygon points="770,0 870,0 970,220 870,220" fill="#f59e0b" />
          <polygon points="890,0 990,0 1090,220 990,220" fill="#1e40af" />
          <polygon points="1010,0 1110,0 1200,200 1200,220 1110,220" fill="#f59e0b" />
          <defs>
            <linearGradient id="fadeLeft" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="1" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="400" y="0" width="280" height="220" fill="url(#fadeLeft)" />
        </svg>

        {/* Language toggle */}
        <button
          onClick={() => setLang(lang === "fi" ? "en" : "fi")}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 20,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 6,
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            padding: "0.35rem 0.75rem",
            cursor: "pointer",
          }}
        >
          {t.toggleLabel}
        </button>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 1000,
            margin: "0 auto",
            padding: "2.5rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1.75rem",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: 108,
              height: 108,
              borderRadius: "50%",
              border: "4px solid #f59e0b",
              background: "#1e293b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "#f59e0b",
              flexShrink: 0,
              letterSpacing: "-0.02em",
            }}
          >
            LT
          </div>

          {/* Name + title + contact */}
          <div>
            <h1
              style={{
                fontSize: "clamp(2rem, 6vw, 3.25rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              <span style={{ color: "#ffffff" }}>Lauri </span>
              <span style={{ color: "#f59e0b" }}>Tuumi</span>
            </h1>
            <p
              style={{
                marginTop: "0.45rem",
                fontSize: "0.95rem",
                color: "#94a3b8",
                fontWeight: 500,
              }}
            >
              {t.subtitle}
            </p>
            <div
              style={{
                marginTop: "0.9rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                fontSize: "0.82rem",
                color: "#cbd5e1",
              }}
            >
              <ContactLink href={`tel:${contact.phone}`}>
                <PhoneIcon /> {contact.phone}
              </ContactLink>
              <ContactLink href={`mailto:${contact.email}`}>
                <EmailIcon /> {contact.email}
              </ContactLink>
              <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <LocationIcon /> {contact.location}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "2.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
        }}
        className="cv-main-grid"
      >
        {/* ── LEFT SIDEBAR ── */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {/* Education */}
          <section>
            <SectionHeading>{t.sections.education}</SectionHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {education[lang].map((edu) => (
                <div
                  key={edu.degree}
                  style={{ borderLeft: "3px solid #f59e0b", paddingLeft: "0.875rem" }}
                >
                  <div
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "#d97706",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {edu.years}
                  </div>
                  <div
                    style={{
                      marginTop: "0.15rem",
                      fontSize: "0.83rem",
                      fontWeight: 600,
                      color: "#1e293b",
                      lineHeight: 1.35,
                    }}
                  >
                    {edu.degree}
                  </div>
                  <div
                    style={{ fontSize: "0.73rem", color: "#64748b", marginTop: "0.1rem" }}
                  >
                    {edu.school}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <SectionHeading>{t.sections.skills}</SectionHeading>
            {skills[lang].map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </section>
        </aside>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {/* Work Experience */}
          <section>
            <SectionHeading>{t.sections.experience}</SectionHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {experience[lang].map((job) => (
                <div
                  key={job.company + job.period}
                  style={{
                    position: "relative",
                    paddingLeft: "1.25rem",
                    borderLeft: "2px solid #1e40af",
                  }}
                >
                  {/* Diamond marker */}
                  <div
                    style={{
                      position: "absolute",
                      left: -6,
                      top: 6,
                      width: 10,
                      height: 10,
                      background: "#f59e0b",
                      transform: "rotate(45deg)",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div>
                      <div
                        style={{ fontWeight: 700, fontSize: "0.93rem", color: "#0f172a" }}
                      >
                        {job.title}
                      </div>
                      <div
                        style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1e40af" }}
                      >
                        {job.company}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        background: "#e2e8f0",
                        color: "#475569",
                        padding: "0.2rem 0.55rem",
                        borderRadius: 4,
                        whiteSpace: "nowrap",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {job.period}
                    </span>
                  </div>

                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.3rem",
                    }}
                  >
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        style={{
                          display: "flex",
                          gap: "0.45rem",
                          fontSize: "0.8rem",
                          color: "#475569",
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: "#f59e0b", flexShrink: 0, marginTop: "0.1rem" }}>
                          ▸
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* References */}
          <section>
            <SectionHeading>{t.sections.references}</SectionHeading>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: "1rem",
              }}
            >
              {references[lang].map((ref) => (
                <div
                  key={ref.name}
                  style={{
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderTop: "3px solid #f59e0b",
                    borderRadius: 6,
                    padding: "1rem",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{ fontWeight: 700, fontSize: "0.88rem", color: "#0f172a" }}
                  >
                    {ref.name}
                  </div>
                  <div
                    style={{ fontSize: "0.76rem", fontWeight: 600, color: "#1e40af", marginTop: "0.1rem" }}
                  >
                    {ref.title}
                  </div>
                  <div style={{ fontSize: "0.73rem", color: "#64748b" }}>
                    {ref.company}
                  </div>
                  <div style={{ marginTop: "0.75rem" }}>
                    <ContactLink href={ref.linkedin} small>
                      <LinkedInIcon small /> {t.linkedin}
                    </ContactLink>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <style>{`
        @media (min-width: 768px) {
          .cv-main-grid {
            grid-template-columns: 210px 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TINY HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function ContactLink({
  href,
  children,
  small = false,
}: {
  href: string;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <a
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.35rem",
        color: "inherit",
        textDecoration: "none",
        fontSize: small ? "0.73rem" : undefined,
      }}
    >
      {children}
    </a>
  );
}

function PhoneIcon({ small = false }: { small?: boolean }) {
  const s = small ? 11 : 13;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function EmailIcon({ small = false }: { small?: boolean }) {
  const s = small ? 11 : 13;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function LinkedInIcon({ small = false }: { small?: boolean }) {
  const s = small ? 11 : 13;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}
