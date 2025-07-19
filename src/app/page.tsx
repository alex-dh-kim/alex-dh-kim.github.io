import Image from "next/image";
import AnimatedSection from "./components/AnimatedSection";

export default function Portfolio() {
  return (
    <div className="relative bg-background text-foreground font-sans">
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 animate-gradient-x -z-10"></div>

      

      <div className="container mx-auto px-4 sm:px-8 max-w-[800px]">
        {/* Hero Section */}
        <header id="home" className="min-h-screen flex flex-col items-center justify-center text-center scroll-mt-16">
          <AnimatedSection>
            <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden shadow-2xl mb-8 bg-white/30 dark:bg-black/30 mx-auto">
              <Image src="/assets/profile.jpeg" alt="Profile Picture" layout="fill" objectFit="cover" className="rounded-full" />
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-primary mb-4">Alex Donghyun Kim</h1>
            <p className="text-xl md:text-2xl text-secondary max-w-[700px] mx-auto">
              A frontend developer crafting beautiful and functional web experiences.
            </p>
          </AnimatedSection>
        </header>

        <main className="space-y-32 md:space-y-48">
          {/* About Me Section */}
          <section id="about" className="scroll-mt-24">
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
                    Im a developer who loves turning ideas into reality with code. I focus on creating intuitive, high-performance applications that provide a seamless user experience. My passion lies in the intersection of design and technology.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center mb-12">My Creations</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Project Card */}
                <div className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="relative h-56 bg-gray-200 dark:bg-gray-800">
                     <Image src="/assets/window.svg" alt="Project Thumbnail" layout="fill" objectFit="cover" className=""/>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">Project Name</h3>
                    <p className="text-secondary mb-4">A short and engaging description of the project.</p>
                    <a href="#" className="font-bold text-primary hover:underline">Explore &rarr;</a>
                  </div>
                </div>
                 {/* Add another project card here */}
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
          <section id="contact" className="scroll-mt-24 text-center py-24">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-4">Lets Build Something Great</h2>
              <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">Have a project in mind or just want to say hello? Id love to hear from you.</p>
              <a href="mailto:your.email@example.com" className="bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg shadow-lg">Get In Touch</a>
            </AnimatedSection>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 mt-16 border-t border-gray-400/30">
          <p className="text-secondary">&copy; {new Date().getFullYear()} Alex Donghyun Kim. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
