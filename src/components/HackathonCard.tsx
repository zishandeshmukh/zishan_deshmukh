'use client';
import { motion } from 'framer-motion';

interface HackathonCardProps {
  title: string;
  event: string;
  date: string;
  description: string;
  type: 'won' | 'participated';
  youtubeId?: string;
  certificateLink?: string;
  githubLink?: string;
  projectLink?: string;
}

export default function HackathonCard({
  title,
  event,
  date,
  description,
  type,
  youtubeId,
  certificateLink,
  githubLink,
  projectLink,
}: HackathonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-cyan-500/20 overflow-hidden group hover:border-cyan-400/50 transition-all duration-500"
    >
      {/* Trophy badge */}
      <div className={`absolute top-4 right-4 text-4xl z-10 ${type === 'won' ? 'animate-bounce' : ''}`}>
        {type === 'won' ? '🏆' : '🎯'}
      </div>
      
      {/* Status badge */}
      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
        type === 'won' 
          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black' 
          : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
      }`}>
        {type === 'won' ? '🥇 Winner' : '✓ Participated'}
      </div>
      
      {/* YouTube Embed */}
      {youtubeId && (
        <div className="relative pt-12">
          <div className="aspect-video bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-cyan-400 font-medium mb-1">{event}</p>
        <p className="text-slate-500 text-sm mb-3">{date}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
        
        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          {certificateLink && (
            <a
              href={certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
            >
              📜 Certificate
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-slate-500/30 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          )}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              🔗 Project
            </a>
          )}
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
      </div>
    </motion.div>
  );
}
