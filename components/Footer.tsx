import Link from 'next/link'
import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row gap-6 py-8 px-4 justify-between items-center z-10 relative border-t border-slate-800/50">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Jude Eseka
      </p>
      <div className="flex items-center gap-3">
        <Link
          href="https://github.com/judeeseka"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex justify-center items-center rounded-xl border border-slate-700/60 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
          aria-label="GitHub"
        >
          <FiGithub className="w-5 h-5" />
        </Link>
        <Link
          href="https://x.com/sirjhay3"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex justify-center items-center rounded-xl border border-slate-700/60 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
          aria-label="X (Twitter)"
        >
          <FiTwitter className="w-5 h-5" />
        </Link>
        <Link
          href="https://linkedin.com/in/chinedu-eseka"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex justify-center items-center rounded-xl border border-slate-700/60 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
          aria-label="LinkedIn"
        >
          <FiLinkedin className="w-5 h-5" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer