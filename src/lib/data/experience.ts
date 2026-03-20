import type { Lang, Job } from "../types";

export const experience: Record<Lang, Job[]> = {
  fi: [
    {
      title: "Ohjelmistokehittäjä — Tekninen vastaava",
      company: "Teollisuuden Voima Oyj",
      period: "12/2024 – nykyinen",
      bullets: [
        "Full stack -kehitys Next.js-, Node.js- ja Express-teknologioilla",
        "Jaettujen TypeScript-abstraktioiden ja Zod-pohjaisten datasopimusten suunnittelu, jotka yhtenäistävät tiimikäytäntöjä rajoittamatta arkkitehtuurista joustavuutta",
        "Arkkitehtuurisen suunnan johtaminen tiimissä – mahdollistavien mallien vakiinnuttaminen pakottavien sijaan, mikä vähentää perehdytyksen kitkaa ja pitää koodipohjan mukautuvana",
        "Kehittäjäergonomian ja koodikvaliteetin standardisoinnin edistäminen",
      ],
    },
    {
      title: "Supply Chain AI Specialist",
      company: "Leafhill Solutions Oy",
      period: "06/2024 – 12/2024",
      bullets: [
        "Tutkimus tekoälyratkaisuista OCR:n ja tekoälyn käyttämiseksi strukturoimattomien dokumenttien (pakkauslistat, laskut jne.) muuntamiseen strukturoituun muotoon",
        "Sisäisen LMS-järjestelmän uudelleenrakenteen suunnittelu, mukaan lukien käyttöliittymäsuunnittelu",
        "ORM:n generoimien SQL-kyselyjen ja tietokantaindeksien optimointi, mikä johti 10x nopeampiin kyselyihin",
      ],
    },
    {
      title: "Software Engineer",
      company: "Dyme Solutions Oy",
      period: "05/2023 – 10/2023",
      bullets: [
        "DevOps: kääntämis- ja testausautomaatio (Groovy), CI/CD-putken kehitys ja versiointiratkaisut",
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
      title: "Software Developer — Technical Lead",
      company: "Teollisuuden Voima Oyj",
      period: "12/2024 – present",
      bullets: [
        "Full stack development with Next.js, Node.js, and Express",
        "Designed shared TypeScript abstractions and Zod-based data contracts that standardise team practices without constraining architectural flexibility",
        "Led architectural direction for the team, establishing enabling patterns over prescriptive ones — reducing onboarding friction while keeping the codebase adaptable",
        "Promoting developer ergonomics and standardisation of code quality",
      ],
    },
    {
      title: "Supply Chain AI Specialist",
      company: "Leafhill Solutions Oy",
      period: "06/2024 – 12/2024",
      bullets: [
        "Research into AI solutions using OCR and AI to scan unstructured documents (packing lists, invoices, etc.) into structured data",
        "Planning a restructuring of the in-house LMS system, including UI design",
        "Optimising ORM-generated SQL and database indices, resulting in a 10x speedup in queries",
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
