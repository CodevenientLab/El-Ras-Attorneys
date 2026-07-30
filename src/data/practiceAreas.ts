export interface PracticeArea {
  slug: string;
  icon: "Gavel" | "Users" | "Home" | "Briefcase" | "ShieldCheck" | "FileText";
  title: string;
  blurb: string;
  detail: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "civil-commercial-litigation",
    icon: "Gavel",
    title: "Civil & Commercial Litigation",
    blurb: "Disputes resolved with strategy, not just paperwork.",
    detail:
      "From contract disputes to High Court proceedings, we build cases with the same rigour we'd want if it were our own.",
  },
  {
    slug: "family-law-divorce",
    icon: "Users",
    title: "Family Law & Divorce",
    blurb: "Difficult chapters, handled with discretion.",
    detail:
      "Divorce, maintenance, custody and mediation — guided with a steady hand and a focus on what matters most.",
  },
  {
    slug: "property-conveyancing",
    icon: "Home",
    title: "Property & Conveyancing",
    blurb: "Transfers done right, the first time.",
    detail:
      "Residential and commercial property transfers, bond registrations and sectional title matters, managed end to end.",
  },
  {
    slug: "labour-law",
    icon: "Briefcase",
    title: "Labour Law",
    blurb: "Fair outcomes for employers and employees alike.",
    detail:
      "CCMA representation, unfair dismissal disputes and workplace policy — practical advice before things escalate.",
  },
  {
    slug: "criminal-defence",
    icon: "ShieldCheck",
    title: "Criminal Defence",
    blurb: "A defence built on precision, not panic.",
    detail:
      "From first appearance to trial, a defence strategy shaped around the facts of your specific case.",
  },
  {
    slug: "deceased-estates",
    icon: "FileText",
    title: "Deceased Estates",
    blurb: "Estates administered with care and clarity.",
    detail:
      "Estate administration, wills and trusts — handled so families can focus on what matters during a hard time.",
  },
];
