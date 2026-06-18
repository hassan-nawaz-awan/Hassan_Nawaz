import {
  Atom,
  Award,
  Bot,
  Brain,
  Code2,
  Container,
  Cpu,
  FileText,
  Flame,
  FolderKanban,
  GitBranch,
  Github,
  Globe,
  GraduationCap,
  Hexagon,
  Layers,
  Linkedin,
  Mail,
  Network,
  Presentation,
  Quote,
  Server,
  Terminal,
  Zap,
  Database,
  Fingerprint,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Atom,
  Award,
  Bot,
  Brain,
  Code2,
  Container,
  Cpu,
  FileText,
  Flame,
  FolderKanban,
  GitBranch,
  Github,
  Globe,
  GraduationCap,
  Hexagon,
  Layers,
  Linkedin,
  Mail,
  Network,
  Presentation,
  Quote,
  Server,
  Terminal,
  Zap,
  Database,
  Fingerprint,
};

export function Icon({
  name,
  className = 'w-5 h-5',
}: {
  name: string;
  className?: string;
}) {
  const LucideIcon = iconMap[name] || Globe;
  return <LucideIcon className={className} aria-hidden="true" />;
}
