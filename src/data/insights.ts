export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

// NOTE: placeholder articles. Replace with the firm's real insights/blog
// content before publishing.
export const INSIGHTS: Insight[] = [
  {
    slug: "property-transfer-timeline",
    title: "How long does a property transfer actually take?",
    excerpt: "A realistic breakdown of the conveyancing timeline, from offer to registration.",
    category: "Property Law",
    readTime: "4 min read",
  },
  {
    slug: "unfair-dismissal-ccma",
    title: "What to expect when referring a dispute to the CCMA",
    excerpt: "The practical steps involved in an unfair dismissal referral, explained plainly.",
    category: "Labour Law",
    readTime: "5 min read",
  },
  {
    slug: "deceased-estate-first-steps",
    title: "Deceased estates: the first steps for a nominated executor",
    excerpt: "What to do — and what to expect — in the first weeks of administering an estate.",
    category: "Deceased Estates",
    readTime: "6 min read",
  },
];
