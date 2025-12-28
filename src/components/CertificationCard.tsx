'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  skills: string[];
  certificateLink?: string;
  uploadedImage?: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  icon,
  skills,
  certificateLink,
  uploadedImage,
}: CertificationCardProps) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6 hover:border-purple-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
      >
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Content */}
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-purple-400 font-medium text-sm mb-1">{issuer}</p>
        <p className="text-slate-500 text-xs mb-3">{date}</p>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-1 mb-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-400 border border-slate-700/50"
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          {certificateLink && (
            <a
              href={certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              View Certificate
            </a>
          )}
          {uploadedImage && (
            <button
              onClick={() => setShowPreview(true)}
              className="flex-1 text-center px-3 py-2 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-xs font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Preview
            </button>
          )}
        </div>
        
        {/* Decorative gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.div>

      {/* Preview Modal */}
      {showPreview && uploadedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowPreview(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-4xl max-h-[90vh] overflow-auto"
          >
            <img src={uploadedImage} alt={title} className="rounded-lg" />
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}
