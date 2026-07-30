import { Gavel, Users, Home, Briefcase, ShieldCheck, FileText, LucideProps } from "lucide-react";
import { PracticeArea } from "@/data/practiceAreas";

const ICONS: Record<PracticeArea["icon"], React.ComponentType<LucideProps>> = {
  Gavel,
  Users,
  Home,
  Briefcase,
  ShieldCheck,
  FileText,
};

export function PracticeIcon({ name, ...props }: { name: PracticeArea["icon"] } & LucideProps) {
  const Icon = ICONS[name];
  return <Icon {...props} />;
}
