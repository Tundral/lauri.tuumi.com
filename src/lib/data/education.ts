import { z } from "zod";
import { degreeSchema } from "../types";

const educationSchema = z.object({
  fi: z.array(degreeSchema),
  en: z.array(degreeSchema),
});

export const education = educationSchema.parse({
  fi: [
    {
      degree: "Tietojenkäsittelyn Tradenomitutkinto",
      school: "Satakunnan Ammattikorkeakoulu",
      years: "2019 – 2023",
    },
    {
      degree: "Growth & AI Academy",
      school: "Saranen Consulting Oy",
      years: "06/2024 – 10/2024",
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
      degree: "Growth & AI Academy",
      school: "Saranen Consulting Oy",
      years: "06/2024 – 10/2024",
    },
    {
      degree: "Finnish Matriculation Examination",
      school: "Tampere Lyseo Upper Secondary School",
      years: "2014 – 2018",
    },
  ],
});
