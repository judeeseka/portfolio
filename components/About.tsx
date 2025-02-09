import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
  {
    title: "Background & Education",
    description:
      "I hold a degree in Computer Science, where I built a strong foundation in software development and modern web technologies. Beyond formal education, I continuously enhance my skills through online courses, certifications, and hands-on projects to stay updated with industry trends.",  
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Background & Education
      </div>
    ),
  },
  {
    title: "My Journey",
    description:
      "With a passion to solve real-world problems by building solutions that empower users, foster engagement, and create lasting value through balancing functionality with intuitive user interfaces, prioritizing performance, accessiblity, responsiveness and clean code. Every project is an opportunity to push boundaries and learn something new.",
    content: (
    //   <div className="h-full w-full  flex items-center justify-center text-white">
    //     <Image
    //       src="/linear.webp"
    //       width={300}
    //       height={300}
    //       className="h-full w-full object-cover"
    //       alt="linear board demo"
    //     />
    //     My Journey
    //   </div>
    <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        My Journey
      </div>
    ),
  },
  {
    title: "Technologies",
    description:
      "HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, ShadCN, Zustand, React Query, Vs Code, Git",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Tech Stack and Tools
      </div>
    ),
  },
  {
    title: "Personal Interests/Hobbies",
    description:
      "Committed to continuous personal development, constantly staying up to date with recent tech trends and industry advancements. Beyond technology, I enjoy exploring new ideas and experiences that broaden my knowledge and perspective.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Beyond Code
      </div>
    ),
  },
];

const About = () => {
  return (
    <section id='about' className='py-20 relative z-10'>
        <p className='mb-2 text-lg text-center'>Introduction</p>
        <h2 className='text-5xl text-center'>About me</h2>

        <div className='px-10 pt-10'>
            <StickyScroll content={content} />
        </div>
    </section>
  )
}

export default About