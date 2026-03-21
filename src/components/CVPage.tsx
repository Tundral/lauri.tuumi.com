"use client";
import React, { useState, useEffect } from "react";
import type { Lang } from "@/lib/types";
import { buildTheme } from "@/lib/theme";
import { ui } from "@/lib/translations";
import { contact, getEmail, skills, education, experience, references } from "@/lib/data";
import { Header } from "./cv/Header";
import { EmailModal } from "./cv/EmailModal";
import { EducationSection } from "./cv/sections/EducationSection";
import { SkillsSection } from "./cv/sections/SkillsSection";
import { ProjectNotesSection } from "./cv/sections/ProjectNotesSection";
import { ExperienceSection } from "./cv/sections/ExperienceSection";
import { ReferencesSection } from "./cv/sections/ReferencesSection";

const CVPage = () => {
  const [lang, setLang] = useState<Lang>("en");
  const [isDark, setIsDark] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const t = ui[lang];
  const th = buildTheme(isDark);

  function handleCopy() {
    navigator.clipboard.writeText(getEmail());
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setEmailModalOpen(false);
    }, 1200);
  }

  return (
    <div style={{ minHeight: "100vh", background: th.pageBg }}>
      <Header
        subtitle={t.subtitle}
        summary={t.summary}
        toggleLabel={t.toggleLabel}
        linkedinUrl={contact.linkedin}
        onToggleLang={() => setLang(lang === "fi" ? "en" : "fi")}
        onOpenEmail={() => setEmailModalOpen(true)}
        downloadPdfSlot={
          <a
            href={`/lauri-tuumi-cv-${lang}.pdf`}
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(255,255,255,0.08)",
              color: "#cbd5e1",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 6,
              padding: "0.45rem 1rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            ↓ CV PDF
          </a>
        }
      />

      <EmailModal
        open={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        isDark={isDark}
        email={getEmail()}
        copied={copied}
        onCopy={handleCopy}
      />

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
        {/* Left sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <EducationSection
            items={education[lang]}
            label={t.sections.education}
            theme={th}
          />
          <SkillsSection
            items={skills[lang]}
            label={t.sections.skills}
            theme={th}
            tierLabels={t.skillTiers}
          />
          <ProjectNotesSection
            heading={t.notes.heading}
            items={
              references[lang].length > 0
                ? t.notes.items
                : t.notes.items.filter((item) => item.title !== "Trust & Integrity")
            }
            theme={th}
          />
        </aside>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <ExperienceSection
            items={experience[lang]}
            label={t.sections.experience}
            theme={th}
          />
          {references[lang].length > 0 && (
            <ReferencesSection
              items={references[lang]}
              label={t.sections.references}
              noteTemplate={t.sections.referencesNoteTemplate}
              linkedinLabel={t.linkedin}
              verificationLabels={t.referenceVerification}
              theme={th}
            />
          )}
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
};

export default CVPage;
