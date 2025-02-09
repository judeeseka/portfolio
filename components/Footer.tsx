import Link from 'next/link'
import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="flex pb-10 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Jude Eseka
        </p>

        <div className="flex items-center md:gap-3 gap-6">
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link 
              href="https://github.com/judeeseka"
              target='_blank'>
              <FiGithub />
              </Link>
            </div>
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link
              href="https://x.com/sirjhay3"
              target='_blank'
              >
                <FiTwitter />
              </Link>
            </div>
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link
              href="https://linkedin.com/in/chinedu-eseka"
              target='_blank'
              >
              <FiLinkedin />
              </Link>
            </div>
        </div>
      </footer>
  )
}

export default Footer