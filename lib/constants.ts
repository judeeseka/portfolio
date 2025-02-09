export const navItems = [
      { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Easyserve",
    description: "A digital platform that connects clients with artisans seamlessly.",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: "/easyserve.png",
    imageWidth: 2880,
    imageHeight: 2021,
    links: {
      github: "#",
      // live: "https://easyserve-quhd.onrender.com/"
      live: "https://easyserve.com.ng/"
    }
  },
  {
    id: 2,
    title: "Carefinder",
    description: "An app that helps you locate hospitals and healthcare services within your region quickly and easily.",
    tags: ["Next.js", "Tailwind", "Appwrite"],
    imageUrl: "/carefinder.png",
    imageWidth: 2048,
    imageHeight: 1502,
    links: {
      github: "https://github.com/judeeseka/Carefinder_v2",
      live: "https://carefinder-v2.vercel.app/"
    }
  },
];