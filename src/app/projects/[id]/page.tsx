import ProjectDetailClient from './ProjectDetailClient';
import { allProjects } from '@/data/projects'; // 분리된 데이터 임포트

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    id: String(project.id),
  }));
}

export default function ProjectDetailPage() {
  return <ProjectDetailClient />;
}