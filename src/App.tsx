import React from 'react';
import { Header } from './components/Header';
import { ProjectsGrid } from './components/ProjectsGrid';
import { projects } from './data/projects';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-zinc-400">
            Explore my projects and see them in action directly on this page.
          </p>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Projects</h2>
          <ProjectsGrid projects={projects} />
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <div className="bg-zinc-900 rounded-lg p-6">
            <p className="text-zinc-400">
              I'm a passionate developer focused on creating meaningful web experiences.
              This portfolio showcases some of my best work, allowing you to explore
              and interact with my projects directly.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-center text-zinc-500">
            © {new Date().getFullYear()} • Built with React and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;