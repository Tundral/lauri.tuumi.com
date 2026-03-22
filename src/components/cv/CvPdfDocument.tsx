import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import type { Lang } from "@/lib/types";
import { contact, skills, education, experience } from "@/lib/data";
import { ui } from "@/lib/translations";

const BLUE = "#1e3a8a";
const AMBER = "#f59e0b";
const DARK = "#0f172a";
const GRAY = "#64748b";
const LIGHT_GRAY = "#94a3b8";
const BORDER = "#e2e8f0";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: DARK,
    paddingTop: 0,
    paddingBottom: 24,
    paddingHorizontal: 0,
  },
  // QR banner
  qrBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: BLUE,
    paddingHorizontal: 28,
    paddingVertical: 14,
    marginBottom: 0,
  },
  qrImage: {
    width: 72,
    height: 72,
  },
  qrTextBlock: {
    flex: 1,
  },
  qrHeadline: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  qrUrl: {
    fontSize: 9,
    color: AMBER,
    marginBottom: 3,
  },
  qrNote: {
    fontSize: 8,
    color: "#cbd5e1",
  },
  // Header section
  headerSection: {
    backgroundColor: DARK,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 3,
    borderBottomColor: AMBER,
  },
  name: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
    marginBottom: 3,
  },
  nameAccent: {
    color: AMBER,
  },
  subtitle: {
    fontSize: 11,
    color: LIGHT_GRAY,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
  },
  contactItem: {
    fontSize: 8,
    color: LIGHT_GRAY,
  },
  // Body
  body: {
    flexDirection: "row",
    paddingHorizontal: 28,
    paddingTop: 18,
    gap: 20,
  },
  leftCol: {
    width: "67%",
  },
  rightCol: {
    width: "30%",
  },
  headerInner: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
  },
  logoBox: {
    width: 39,
    height: 39,
    borderRadius: 8,
    backgroundColor: "#1e293b",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  headerContent: {
    flex: 1,
  },
  // Section headings
  sectionHeading: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: BLUE,
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    paddingBottom: 4,
    marginBottom: 8,
  },
  section: {
    marginBottom: 16,
  },
  // Education
  degreeTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: DARK,
  },
  degreeSchool: {
    fontSize: 8,
    color: GRAY,
    marginBottom: 1,
  },
  degreeYears: {
    fontSize: 8,
    color: LIGHT_GRAY,
    marginBottom: 6,
  },
  // Skills
  skillRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 3,
  },
  skillDot: {
    fontSize: 9,
    color: AMBER,
  },
  skillDotFamiliar: {
    fontSize: 9,
    color: LIGHT_GRAY,
  },
  skillName: {
    fontSize: 8.5,
    color: DARK,
  },
  skillTierLabel: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: LIGHT_GRAY,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 4,
    marginTop: 2,
  },
  // Experience
  jobTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    marginBottom: 1,
  },
  jobMeta: {
    fontSize: 8,
    color: GRAY,
    marginBottom: 4,
  },
  bullet: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 2,
    marginLeft: 4,
  },
  bulletDash: {
    fontSize: 8,
    color: AMBER,
    width: 8,
  },
  bulletText: {
    fontSize: 8,
    color: DARK,
    flex: 1,
    lineHeight: 1.4,
  },
  jobBlock: {
    marginBottom: 10,
  },
  // References
  refName: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: DARK,
  },
  refTitle: {
    fontSize: 8,
    color: GRAY,
    marginBottom: 3,
  },
  refQuote: {
    fontSize: 7.5,
    color: GRAY,
    fontFamily: "Helvetica-Oblique",
    lineHeight: 1.5,
    marginBottom: 3,
  },
  refLink: {
    fontSize: 7.5,
    color: BLUE,
    textDecoration: "underline",
  },
  refBlock: {
    marginBottom: 10,
  },
});

export const CvPdfDocument = ({
  lang,
  qrDataUrl,
}: {
  lang: Lang;
  qrDataUrl: string;
}) => {
  const t = ui[lang];
  const edu = education[lang];
  const sk = skills[lang];
  const exp = experience[lang];
  const coreSkills = sk.filter((s) => s.level >= 4);
  const familiarSkills = sk.filter((s) => s.level < 4);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerSection}>
          <View style={styles.headerInner}>
            <View style={styles.headerContent}>
              <Text style={styles.name}>
                <Text>Lauri </Text>
                <Text style={styles.nameAccent}>Tuumi</Text>
              </Text>
              <Text style={styles.subtitle}>{t.subtitle}</Text>
              <View style={styles.contactRow}>
                <Text style={styles.contactItem}>{contact.linkedin}</Text>
              </View>
              <Text style={{ fontSize: 7, color: "#475569", marginTop: 5, fontFamily: "Helvetica-Oblique" }}>
                {lang === "en"
                  ? "Contact details omitted from this file — this PDF is publicly available and indexed to prevent scraping. Visit lauri.tuumi.com to get in touch."
                  : "Yhteystiedot jätetty pois tästä tiedostosta — tämä PDF on julkisesti saatavilla ja indeksoitu, eikä sisällä henkilökohtaisia tietoja roskapostin estämiseksi. Ota yhteyttä osoitteessa lauri.tuumi.com."}
              </Text>
            </View>
            <View style={styles.logoBox}>
              <Text>
                <Text style={{ fontSize: 18, fontFamily: "Helvetica-Bold", color: "#ffffff" }}>L</Text>
                <Text style={{ fontSize: 18, fontFamily: "Helvetica-Bold", color: AMBER }}>T</Text>
              </Text>
            </View>
          </View>
        </View>

        {/* QR Banner */}
        <View style={styles.qrBanner}>
          <Image src={qrDataUrl} style={styles.qrImage} />
          <View style={styles.qrTextBlock}>
            <Text style={styles.qrHeadline}>
              {lang === "en"
                ? "View the CV online"
                : "Katso CV verkossa"}
            </Text>
            <Link src="https://lauri.tuumi.com" style={styles.qrUrl}>lauri.tuumi.com</Link>
            <Text style={styles.qrNote}>
              {lang === "en"
                ? "This PDF is generated from the CV website. Visit for the most up-to-date information."
                : "Tämä PDF on luotu CV-sivustolta. Vieraile sivustolla ajantasaisimpien tietojen saamiseksi."}
            </Text>
          </View>
        </View>

        {/* Body */}
        <View style={styles.body}>
          {/* Left column — Experience */}
          <View style={styles.leftCol}>
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>{t.sections.experience}</Text>
              {exp.map((job, i) => (
                <View key={i} style={styles.jobBlock}>
                  <Text style={styles.jobTitle}>{job.title}</Text>
                  <Text style={styles.jobMeta}>
                    {job.company} · {job.period}
                  </Text>
                  {job.bullets.map((b, j) => (
                    <View key={j} style={styles.bullet}>
                      <Text style={styles.bulletDash}>–</Text>
                      <Text style={styles.bulletText}>{b}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>

          {/* Right column — Skills + Education */}
          <View style={styles.rightCol}>
            {/* Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>{t.sections.skills}</Text>
              <Text style={styles.skillTierLabel}>{t.skillTiers.core}</Text>
              {coreSkills.map((s, i) => (
                <View key={i} style={styles.skillRow}>
                  <Text style={styles.skillDot}>*</Text>
                  <Text style={styles.skillName}>{s.name}</Text>
                </View>
              ))}
              <Text style={[styles.skillTierLabel, { marginTop: 6 }]}>
                {t.skillTiers.familiar}
              </Text>
              {familiarSkills.map((s, i) => (
                <View key={i} style={styles.skillRow}>
                  <Text style={styles.skillDotFamiliar}>-</Text>
                  <Text style={styles.skillName}>{s.name}</Text>
                </View>
              ))}
            </View>

            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>{t.sections.education}</Text>
              {edu.map((d, i) => (
                <View key={i}>
                  <Text style={styles.degreeTitle}>{d.degree}</Text>
                  <Text style={styles.degreeSchool}>{d.school}</Text>
                  <Text style={styles.degreeYears}>{d.years}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
