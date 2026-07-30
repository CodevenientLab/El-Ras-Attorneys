// NOTE: placeholder profile content. Replace with the firm's real attorney
// names, photos, admission dates and memberships before this goes live.
export interface TeamMember {
  role: string;
  bio: string;
  qualifications: string[];
  memberships: string[];
}

export const TEAM: TeamMember[] = [
  {
    role: "Founding Attorney",
    bio: "Leads the firm's litigation and commercial practice, with a focus on clear communication and realistic case strategy from the first consultation.",
    qualifications: [
      "Admitted attorney of the High Court of South Africa",
      "LLB — replace with actual university and year",
    ],
    memberships: ["Law Society of South Africa", "Legal Practice Council", "North West Bar"],
  },
];
