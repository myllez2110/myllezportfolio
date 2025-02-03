import React from 'react';
import { Header } from './components/Header';
import { ProjectsGrid } from './components/ProjectsGrid';
import { projects } from './data/projects';
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  GitBranch, 
  Users, 
  Brain, 
  Award, 
  BookOpen, 
  School,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Sparkles
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="max-w-7x1 mx-auto px-6 pt-24 pb-16">
        <section className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
          <div className="relative max-w-4xl mx-auto text-center py-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 mb-8">
              <Sparkles size={16} className="text-yellow-400" />
              <span className="text-zinc-300">Available for Development Positions</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">Hi, I'm Daniel</span>
              <span className="ml-2">👋</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              A 19-year-old aspiring full-stack developer from Brazil, passionate about creating meaningful web experiences and solving complex problems.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:danielbaptista2005@gmail.com" 
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors"
              >
                <Mail size={20} />
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 rounded-full font-medium hover:bg-zinc-700 transition-colors"
              >
                View Projects
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                    <GraduationCap className="text-emerald-400" />
                    Education
                  </h3>
                  <div className="space-y-3 text-zinc-300">
                    <div className="bg-zinc-800/30 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Current</h4>
                      <p>• Computer Engineering Major at Federal University</p>
                    </div>
                    <div className="bg-zinc-800/30 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Previous</h4>
                      <p>• Telecommunications Technician Integrated with High School – CEFET/RJ</p>
                      <p className="text-sm text-zinc-400 mt-2">Key subjects: Network Configuration and Management, Fundamentals of Telecommunications, and Networks</p>
                    </div>
                    <div className="bg-zinc-800/30 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Additional Education</h4>
                      <p>• Full-stack Development Residency at SERRATEC</p>
                      <p>• Computational Logic Course at IFES</p>
                      <p>• Professional and Personal Management Course</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                    <Award className="text-yellow-400" />
                    Academic Achievements
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-zinc-800/30 rounded-lg p-4">
                      <h4 className="font-medium text-emerald-400 mb-2">Research & Scientific Initiation</h4>
                      <p className="text-zinc-300">CNPQ/PIBIC-EM Research Project on assistive technologies in historical buildings, implementing solutions for accessibility issues.</p>
                    </div>
                    <div className="bg-zinc-800/30 rounded-lg p-4">
                      <h4 className="font-medium text-emerald-400 mb-2">Project Collaborator</h4>
                      <p className="text-zinc-300">CEFET/RJ Extension Project - PBEXT Human Rights "LADRILHAR: PERCURSOS INCLUSIVOS"</p>
                    </div>
                    <div className="bg-zinc-800/30 rounded-lg p-4">
                      <h4 className="font-medium text-emerald-400 mb-2">Academic Support</h4>
                      <p className="text-zinc-300">Physics Tutor at CEFET/RJ, providing academic support to fellow students</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                    <Briefcase className="text-blue-400" />
                    Professional Experience
                  </h3>
                  <div className="bg-zinc-800/30 rounded-lg p-4">
                    <p className="text-zinc-300">• Private Project with Orange using Scrum methodology</p>
                    <p className="text-zinc-300">• Hands-on experience with agile development and team collaboration</p>
                  </div>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                    <Code2 className="text-purple-400" />
                    Technical Skills
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">React</span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">TypeScript</span>
                      </div>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Java</span>
                        <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Spring</span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Flask</span>
                      </div>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Tools & Methods</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Git</span>
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">GitHub</span>
                        <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">Scrum</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-800">
                <h3 className="text-xl font-semibold mb-6">Why Work With Me?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-zinc-800/30 p-4 rounded-lg hover:bg-zinc-800/50 transition-colors">
                    <h4 className="font-medium text-emerald-400 mb-2">Full-Stack Capability</h4>
                    <p className="text-zinc-300">Proficient in both frontend and backend development, enabling end-to-end solution delivery.</p>
                  </div>
                  <div className="bg-zinc-800/30 p-4 rounded-lg hover:bg-zinc-800/50 transition-colors">
                    <h4 className="font-medium text-blue-400 mb-2">Academic Excellence</h4>
                    <p className="text-zinc-300">Strong academic background with research experience and proven problem-solving abilities.</p>
                  </div>
                  <div className="bg-zinc-800/30 p-4 rounded-lg hover:bg-zinc-800/50 transition-colors">
                    <h4 className="font-medium text-purple-400 mb-2">Modern Tech Stack</h4>
                    <p className="text-zinc-300">Experience with current technologies and best practices in software development.</p>
                  </div>
                  <div className="bg-zinc-800/30 p-4 rounded-lg hover:bg-zinc-800/50 transition-colors">
                    <h4 className="font-medium text-yellow-400 mb-2">Team Player</h4>
                    <p className="text-zinc-300">Proven experience in collaborative environments with Scrum methodology.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
                <a 
                  href="https://github.com/myllez2110" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-full hover:bg-zinc-700/50 transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/danielrbaptista" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-full hover:bg-zinc-700/50 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:danielbaptista2005@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-full hover:bg-zinc-700/50 transition-colors"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <ProjectsGrid projects={projects} />
        </section>

        <section className="max-w-4xl mx-auto text-center py-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together!</h2>
            <p className="text-xl text-zinc-300 mb-8">
              I'm currently available for full-stack development positions and excited to bring my skills and enthusiasm to your team.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:danielbaptista2005@gmail.com" 
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors"
              >
                <Mail size={20} />
                Contact Me
              </a>
              <a 
                href="https://cdn.discordapp.com/attachments/1320889234143580181/1336065409345916959/danielcurriculum.pdf?ex=67a27360&is=67a121e0&hm=5c845dc176408ff586534d3c8eb721ae43bef869afa49fa56261b3a98c2059dd&"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 rounded-full font-medium hover:bg-zinc-700 transition-colors"
              >
                Download Resume
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-center text-zinc-500">
            © {new Date().getFullYear()} • Built with React and Tailwind CSS
          </p>
          <p className="text-center text-zinc-500">
            danielbaptista2005@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;