export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Tech stack", link: "#tech-stack" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Dokwa Suite",
    description:
      "A finance operations platform designed to centralize financial visibility and operational workflows.",
    tags: ["Nextjs", "TypeScript", "Tailwind"],
    role: "Sole Frontend Engineer",
    techStackShort: "Nextjs, TypeScript, Tailwind, Zustand",
    imageUrl: "/dokwa.png",
    imageWidth: 1318,
    imageHeight: 619,
    links: {
      github: "",
      live: "https://dokwa.com",
    },
    caseStudy: {
      overview:
        "Dokwa Suite is a SaaS platform focused on helping operations and finance teams centralize financial visibility, workflow coordination, and operational decision-making. The platform reduces fragmented processes by consolidating data and workflows from multiple business tools into a unified interface.",
      // audience:
      //   "End-users looking for reliable artisans and service providers, plus artisans managing their bookings and availability.",
      problem:
        "Teams relied on fragmented tools for accounting, communication, and operational coordination, resulting in limited financial visibility and a heavy dependence on manual reconciliation processes.",
      roleOwnership:
        "Owned the frontend architecture and implementation, collaborating closely with the backend engineer and product designer to translate complex operational workflows into scalable, intuitive user experiences.",
      keyDecisions: [
        "Built data-driven dashboards aggregating financial and operational data to improve visibility and reduce manual coordination.",
        "Implemented AI-powered chat and summarization features to help users extract insights from complex operational data.",
        "Developed a scalable integration layer for third-party workflow tools, enabling extensible automation capabilities.",
      ],
      impact:
        "The platform centralized operational and financial workflows into a unified system, improving visibility across operational processes and financial activities while reducing reliance on manual reconciliation and cross-team coordination.",
    },
  },
  {
    id: 2,
    title: "Easyserve",
    description:
      "A service platform that connects clients with vetted artisans and service providers in their area.",
    tags: ["React", "TypeScript", "Express.js"],
    role: "Sole Frontend Engineer",
    techStackShort: "React, TypeScript, Tailwind, Express.js",
    imageUrl: "/easyserve.avif",
    imageWidth: 1318,
    imageHeight: 619,
    links: {
      github: "",
      live: "https://easyserve.com.ng/",
    },
    caseStudy: {
      overview:
        "Easyserve is a multi-role service platform connecting clients with vetted artisans, while providing admins with tools to manage bookings, payments, and platform operations.",
      // audience:
      //   "End-users looking for reliable artisans and service providers, plus artisans managing their bookings and availability.",
      problem:
        "Service discovery was fragmented across word-of-mouth and unstructured social posts, making it hard to compare providers or trust quality.",
      roleOwnership:
        "I led frontend development while collaborating with backend and product teams to design and deliver end-to-end user flows.",
      keyDecisions: [
        "Designed and built role-based dashboards for clients, artisans, and admins",
        "Implemented booking, confirmation, and review flows aligned with business logic",
        "Contributed to backend logic using Express.js for validation and flow consistency",
      ],
      impact:
        "Improved clarity and usability across multiple user roles as well as reducing operational overhead for admins managing services",
    },
  },
  {
    id: 3,
    title: "Homestart",
    description:
      "Explore preconstruction homes with customizable options and transparent pricing.",
    tags: ["Next.js", "TypeScript", "Firebase"],
    role: "Software Developer",
    productType: "Product MVP",
    techStackShort: "Next.js, TypeScript, Tailwind, React Query, Firebase",
    imageUrl: "/homestart.avif",
    imageWidth: 1153,
    imageHeight: 631,
    links: {
      github: "",
      live: "https://homestart-app.vercel.app/",
    },
    caseStudy: {
      overview:
        "HomeStart is a product MVP focused on helping users gain confidence in purchasing new-build homes through a combination of structured property listings and educational content.",
      // audience:
      //   "Ops and business teams that need lightweight automation without involving engineering for every process change.",
      problem:
        "Many first-time buyers struggle with understanding preconstruction properties and available customization options. Existing platforms focused on listings alone, offering little educational support.",
      roleOwnership:
        "Worked within an accelerator-led agile team to design and implement the frontend experience.",
      keyDecisions: [
        "Participated in product discovery sessions to define user personas and feature scope",
        "Built filterable property listings with customization options (kitchen, bathroom, finishes)",
        "Developed a content-first blog section to educate users on new-build ownership",
        "Integrated Firebase for backend data management and content delivery",
      ],
      impact:
        "Improved user confidence through educational content, balancing structured data and content-driven UX",
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
        "Carefinder is a web platform that helps users quickly locate hospitals and healthcare services within their region.",
      audience:
        "Patients and caregivers who need to quickly find relevant healthcare services in their area.",
      problem:
        "Finding the right healthcare facility was slow and manual, especially in unfamiliar locations, and existing search tools were either outdated or not optimized for mobile.",
      roleOwnership:
        "Implemented the entire frontend application, data fetching flows, and UI for search and filters etc.",
      keyDecisions: [
        "Built search, filtering, and pagination systems optimized for large datasets",
        "Implemented debounced search and query caching so users could refine filters without feeling any lag.",
        "Implemented efficient UI rendering to handle 2,500+ provider records.",
      ],
      impact:
        "Gave users a faster way to discover relevant healthcare options with maintained performance at scale",
    },
  },
];
