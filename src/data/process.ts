export interface ProcessStep {
  title: string;
  detail: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { title: "Consultation", detail: "We listen first. A confidential conversation to understand your matter in full." },
  { title: "Case Assessment", detail: "A candid, realistic view of your position — strengths, risks, and options." },
  { title: "Legal Strategy", detail: "A clear plan of action, explained in plain language before we proceed." },
  { title: "Representation", detail: "Dedicated representation, kept informed at every material step." },
  { title: "Resolution", detail: "Working toward the outcome you need — efficiently, and without surprises." },
];
