'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { allProjects } from '@/data/projects'; // 분리된 데이터 임포트

export default function ProjectDetailClient() {
  const params = useParams();
  const projectId = Number(params.id);
  const project = allProjects.find(p => p.id === projectId);

  const router = useRouter();

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Project Not Found</h1>
          <p className="text-lg text-secondary">The project you are looking for does not exist.</p>
          <button onClick={() => router.back()} className="mt-8 inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">Go Back Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-background text-foreground font-sans min-h-screen pt-24 pb-16">
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 animate-gradient-x -z-10"></div>

      <div className="container mx-auto px-4 sm:px-8 max-w-[800px] bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-xl shadow-lg p-8 md:p-12">
        <button onClick={() => router.back()} className="inline-block text-primary hover:underline mb-8">&larr; Back to Projects</button>

        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">{project.title}</h1>
        <p className="text-xl text-secondary mb-8">{project.description}</p>

        <div className="relative w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-8">
          <Image src={project.image} alt={`${project.title} Screenshot`} layout="fill" objectFit="cover" className="rounded-lg" />
        </div>

        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{tech}</span>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Project Details</h2>
        <p className="text-lg text-secondary leading-relaxed mb-8">
          {project.longDescription}
        </p>

        <div className="flex gap-4 justify-center">
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">Live Demo</a>
          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 text-foreground font-bold py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Source Code</a>
        </div>
      </div>
    </div>
  );
}
