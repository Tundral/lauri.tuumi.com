import { z } from "zod";
import { referenceSchema } from "../types";

const referencesSchema = z.object({
  fi: z.array(referenceSchema),
  en: z.array(referenceSchema),
});

export const references = referencesSchema.parse({
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
});
