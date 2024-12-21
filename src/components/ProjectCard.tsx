import React, { useState } from 'react';
import { ExternalLink, Code, X } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showPreview, setShowPreview] = useState(true);
  const [previewHeight, setPreviewHeight] = useState(400);

  const handleResizePreview = () => {
    setPreviewHeight(prev => prev === 400 ? 600 : 400);
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-6 transition-all hover:bg-zinc-800">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="p-2 rounded-full hover:bg-zinc-700 transition-colors"
            title={showPreview ? "Close preview" : "Show preview"}
          >
            {showPreview ? <X size={20} /> : <Code size={20} />}
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-zinc-700 transition-colors"
            title="Open website"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <p className="text-zinc-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-full hover:bg-zinc-900"
          >
            {tech}
          </span>
        ))}
      </div>

      {showPreview && (
        <div className="mt-4">
          <div className="rounded-lg overflow-hidden bg-zinc-950 border border-zinc-800">
            <iframe
              src={project.url}
              className={`w-full transition-all duration-300`}
              style={{ height: `${previewHeight}px` }}
              title={project.title}
              loading="lazy"
            />
          </div>
          <button
            onClick={handleResizePreview}
            className="mt-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            {previewHeight === 400 ? "Show more" : "Show less"}
          </button>
        </div>
      )}
    </div>
  );
}