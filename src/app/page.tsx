'use client';

import Image from "next/image";
import AnimatedSection from "./components/AnimatedSection";
import { useState } from 'react';
import Link from 'next/link';
import { allProjects } from '@/data/projects'; // 분리된 데이터 임포트

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; // Show 3 projects per page

  // Calculate projects for the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Calculate total pages
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="relative bg-background text-foreground font-sans">
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 animate-gradient-x -z-10"></div>

      <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
        {/* Hero Section */}
        <header id="home" className="min-h-screen flex flex-col items-center justify-center text-center scroll-mt-16">
          <AnimatedSection>
            <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden shadow-2xl mb-8 bg-white/30 dark:bg-black/30 mx-auto">
              <Image src="/assets/profile.jpeg" alt="Profile Picture" layout="fill" objectFit="cover" className="rounded-full" />
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-primary mb-4">Alex Donghyun Kim</h1>
            <p className="text-xl md:text-2xl text-secondary max-w-[700px] mx-auto">
              A Mobile App Developer crafting beautiful and functional app experiences.
            </p>
          </AnimatedSection>
        </header>

        <main className="space-y-32 md:space-y-48">
          {/* About Me Section */}
          <section id="about" className="scroll-mt-24 text-center">
            <AnimatedSection>
              <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl bg-white/30 dark:bg-black/30 p-2">
                    <Image src="/assets/vercel.svg" alt="Profile Picture" layout="fill" objectFit="cover" className="rounded-full" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-4xl font-bold mb-6">About Me</h2>
                  <p className="text-lg text-secondary leading-relaxed">
                    자신의 도메인 내의 환경을 제대로 이용할 줄 아는 개발자
                    <br></br>끊임없는 발전을 추구하는 개발자
                    <br></br>서비스적인 측면을 생각하여 기능을 개발하는 개발자
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
              <div className="grid grid-cols-3 gap-16">
                {currentProjects.map((project) => (
                  <div key={project.id} className="group block bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden transition-all duration-300 no-underline border border-gray-400 dark:border-gray-500 p-5" style={{padding: 20, margin: 10, borderRadius: 10}}>
                    <Link href={`/projects/${project.id}`} key={project.id} className="group block bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer no-underline">
                    <div className="relative h-56 bg-gray-200 dark:bg-gray-800 overflow-hidden" style={{borderRadius: 5}} >
                      <Image src={project.image} alt={`Project Thumbnail ${project.id}`} width={500} height={300} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                    </div>
                  </Link>
                  <div className="p-6">
                      <p className="text-secondary mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center mt-24 space-x-10" style={{margin: 20}}>
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-5 py-2 rounded-lg bg-primary/80 text-white font-semibold shadow-md hover:bg-primary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`px-5 py-2 rounded-lg font-semibold shadow-sm transition-colors duration-200 ${currentPage === i + 1 ? 'bg-primary text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-foreground hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-5 py-2 rounded-lg bg-primary/80 text-white font-semibold shadow-md hover:bg-primary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                Next
                </button>
              </div>
            </AnimatedSection>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-24">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center mb-12">Technologies I Use</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {/* Skill Card */}
                <div className="bg-white/50 dark:bg-black/50 backdrop-blur-lg p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 transform hover:-translate-y-2 transition-transform duration-300">
                  <Image src="/assets/window.svg" alt="JavaScript" width={48} height={48} className=""/>
                  <h3 className="font-bold text-lg">JavaScript</h3>
                </div>
                 {/* Add more skill cards here */}
              </div>
            </AnimatedSection>
          </section>

          {/* Contact Section */}
          {/*<section id="contact" className="scroll-mt-24 text-center py-24">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-4">Lets Build Something Great</h2>
              <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">Have a project in mind or just want to say hello? Id love to hear from you.</p>
              <a href="mailto:your.email@example.com" className="bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg shadow-lg">Get In Touch</a>
            </AnimatedSection>
          </section>*/}
          <div style={{margin: 50}}/>
        </main>
      </div>
      {/* Footer */}
      <footer className="text-center py-8 mt-16 border-t border-gray-400/30">
        <p className="text-secondary">&copy; {new Date().getFullYear()} Alex Donghyun Kim. All Rights Reserved.</p>
      </footer>
    </div>
    )
}