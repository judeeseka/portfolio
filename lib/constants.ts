export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Tech stack", link: "#tech-stack" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 2,
    title: "Easyserve",
    description:
      "A marketplace that connects clients with vetted artisans and service providers in their area.",
    tags: ["React", "TypeScript", "Tailwind"],
    role: "Sole Frontend Engineer",
    productType: "Multi-role marketplace",
    techStackShort: "React, TypeScript, Tailwind, REST APIs",
    imageUrl: "/easyserve.avif",
    imageWidth: 1318,
    imageHeight: 619,
    links: {
      github: "#",
      live: "https://easyserve.com.ng/",
    },
    caseStudy: {
      overview:
        "Easyserve is a two-sided marketplace for clients and artisans where users can discover, book, and review services through a responsive web app.",
      audience:
        "End-users looking for reliable artisans and service providers, plus artisans managing their bookings and availability.",
      problem:
        "Service discovery was fragmented across word-of-mouth and unstructured social posts, making it hard to compare providers or trust quality.",
      roleOwnership:
        "Owned the entire frontend implementation from project setup and routing to building reusable UI components and integrating with the backend.",
      keyDecisions: [
        "Modelled the UI around distinct roles (client vs artisan) so navigation, actions, and dashboards were tailored to the right context.",
        "Implemented reusable listing, search, and filter components that could be reconfigured for different service categories without duplicating logic.",
        "Optimized perceived performance with skeleton states, image lazy-loading, and route-based code splitting to keep interactions smooth on mobile.",
      ],
      impact:
        "Made it significantly easier for users to compare providers and complete bookings on mobile, while giving artisans a clearer view of demand and upcoming work.",
    },
  },
  {
    id: 3,
    title: "Workflow Studio",
    description:
      "A lightweight builder for automating internal workflows and approvals without writing code.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    role: "Frontend Engineer",
    productType: "Product MVP",
    techStackShort: "Next.js, TypeScript, Tailwind, React Query",
    imageUrl: "/homestart.avif",
    imageWidth: 1153,
    imageHeight: 631,
    links: {
      github: "#",
      live: "#",
    },
    caseStudy: {
      overview:
        "Workflow Studio is an MVP that lets non-technical teams compose simple approval and notification flows through a drag-and-drop interface.",
      audience:
        "Ops and business teams that need lightweight automation without involving engineering for every process change.",
      problem:
        "Teams relied on manual email approvals and ad-hoc checklists, which were easy to forget and impossible to track over time.",
      roleOwnership:
        "Implemented the core canvas experience, node editor, and configuration panels, and collaborated on the data model with backend engineers.",
      keyDecisions: [
        "Separated visual canvas state from persisted workflow definitions so complex UI interactions didn’t compromise data integrity.",
        "Used React Query for data fetching, caching, and mutation flows to keep the UI responsive even when saving or updating workflows.",
        "Introduced a simple versioning model so users could safely iterate on workflows without breaking live processes.",
      ],
      impact:
        "Provided a clear, visual way for teams to standardize recurring workflows and reduce the amount of back-and-forth with engineering.",
    },
  },
  {
    id: 4,
    title: "Carefinder",
    description:
      "A location-aware app that helps users quickly discover nearby hospitals and healthcare services.",
    tags: ["Next.js", "Tailwind", "Appwrite"],
    role: "Frontend Engineer",
    productType: "Data-heavy application",
    techStackShort: "Next.js, TypeScript, Tailwind, Appwrite",
    imageUrl: "/carefinder.avif",
    imageWidth: 2048,
    imageHeight: 1502,
    links: {
      github: "https://github.com/judeeseka/Carefinder_v2",
      live: "https://carefinder-v2.vercel.app/",
    },
    caseStudy: {
      overview:
        "Carefinder is a responsive web app that surfaces nearby hospitals, clinics, and healthcare providers with filters for distance, specialization, and availability.",
      audience:
        "Patients and caregivers who need to quickly find relevant healthcare services in their area.",
      problem:
        "Finding the right healthcare facility was slow and manual, especially in unfamiliar locations, and existing search tools were either outdated or not optimized for mobile.",
      roleOwnership:
        "Implemented the frontend application, data fetching flows, and UI for maps, search, and filters while collaborating closely with backend and design.",
      keyDecisions: [
        "Designed the layout mobile-first to ensure location-based search and map interactions were usable on small screens.",
        "Implemented debounced search and query caching so users could refine filters without feeling any lag.",
        "Separated data fetching concerns from presentation with a clear hooks layer to keep components focused and testable.",
      ],
      impact:
        "Gave users a faster way to discover relevant healthcare options, especially on mobile devices where most searches originated.",
    },
  },
];
