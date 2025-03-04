const projects = [
  {
    id: "p1",
    title: "Evently",
    description: "Event management platform.",
    images: [
      "/evently/banner",
      "/evently/event_creation",
      "/evently/event",
      "/evently/account",
    ],
    reponame: "Evently",
    link: "https://event-one-beige.vercel.app/",
  },
  {
    id: "p2",
    title: "Agile",
    description: "Project management platform.",
    images: [
      "/agile/banner",
      "/agile/home",
      "/agile/projects",
      "/agile/backlog",
      "/agile/tasks",
      "/agile/submissions",
    ],
    reponame: "agile-project-manager",
    link: "https://agile-project-manager.vercel.app",
  },
  {
    id: "p3",
    title: "Social media app",
    description: "Social media app.",
    images: [
      "/social/banner",
    ],
    reponame: "social-media",
    link: "https://agile-project-manager.vercel.app",
  },
];

export type ProcessType = {
  key: string;
  title: string;
};

const designingProcess = [
  {
    key: "des1",
    title: "Brainstorm and sketch ideas to shape the vision.",
  },
  {
    key: "des2",
    title: "Create wireframes and prototypes in Figma for a smooth flow.",
  },
  {
    key: "des3",
    title: "Design custom assets and visuals with Adobe Photoshop.",
  },
  {
    key: "des4",
    title: "Fine-tune colors, typography, and layouts for a polished look.",
  },
  {
    key: "des5",
    title: "Ensure responsiveness and accessibility for all devices.",
  },
];
const developmentProcess = [
  {
    key: "dev1",
    title: "Plan the core structure and set up the project foundation.",
  },
  {
    key: "dev2",
    title: "Build essential pages and reusable layout components.",
  },
  {
    key: "dev3",
    title: "Implement authentication and secure private routes.",
  },
  {
    key: "dev4",
    title: "Set up admin access and role-based permissions if needed.",
  },
  {
    key: "dev5",
    title: "Develop core business logic and integrate APIs.",
  },
  {
    key: "dev6",
    title:
      "Enhance UI with consistent stylings and ux with GSAP and framer motion animations.",
  },
  {
    key: "dev7",
    title:
      "Optimize performance, test across devices, and finalize for deployment.",
  },
];

const testingProcess = [
  {
    key: "tes1",
    title: "Test individual components to ensure they work as expected.",
  },
  {
    key: "tes2",
    title: "Test and optimize iamges and videos to maximize performance.",
  },
  {
    key: "tes3",
    title: "Check responsiveness across different devices and screen sizes.",
  },
  {
    key: "tes4",
    title: "Validate forms, authentication, and error handling.",
  },
  {
    key: "tes5",
    title:
      "Gather client feedback and refine features for a better experience.",
  },
];

const deploymentProcess = [
  {
    key: "dep1",
    title: "Deploy the project on a reliable hosting platform for the client.",
  },
  {
    key: "dep2",
    title:
      "Ensure all environment variables and API connections are properly configured.",
  },
  {
    key: "dep3",
    title: "Optimize performance and security settings for a smooth launch.",
  },
  {
    key: "dep4",
    title: "Test the live version to ensure everything works as expected.",
  },
  {
    key: "dep5",
    title:
      "If the client needs a custom domain, it can be set up at an additional cost.",
  },
];

const maintainanceProcess = [
  {
    key: "mtn1",
    title: "Fix any bugs or issues that arise to ensure smooth performance.",
  },
  {
    key: "mtn2",
    title: "Monitor and optimize for speed, security, and reliability.",
  },
  {
    key: "mtn3",
    title: "Provide a generous 3 months of free maintenance for peace of mind.",
  },
  {
    key: "mtn4",
    title:
      "After 3 months, the client can choose to continue with paid maintenance.",
  },
  {
    key: "mtn5",
    title: "Offer updates and feature improvements based on client needs.",
  },
];

export {
  projects,
  designingProcess,
  developmentProcess,
  testingProcess,
  deploymentProcess,
  maintainanceProcess,
};
