export const projects = [
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
    techs: [
      {
        logo: "/next.svg",
        name: "Next.js",
      },
      {
        logo: "/better-auth.png",
        name: "Better-auth",
      },
      {
        logo: "/neon.png",
        name: "Neon DB",
      },
      {
        logo: "/uploadthing.png",
        name: "Uploadthing",
      },
      {
        logo: "/ts.svg",
        name: "Typescript",
      },
      {
        logo: "/shad.png",
        name: "Shadcn UI",
      },
      {
        logo: "/tailwind.svg",
        name: "Tailwind",
      },
    ],

    points: [
      "Sign in or sign up.",
      "Create and manage events.",
      "Join public or private (by sending join request) events.",
      "Fully custom auth flow.",
      "Neon serverless postgres SQL database.",
      "Rate limiting.",
      "Light and dark theme.",
    ],

    group: [],
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
    techs: [
      {
        logo: "/next.svg",
        name: "Next.js",
      },
      {
        logo: "/clerk.jpg",
        name: "Clerk",
      },
      {
        logo: "/mongodb.svg",
        name: "MongoDB",
      },
      {
        logo: "/shad.png",
        name: "Shadcn UI",
      },
      {
        logo: "/ts.svg",
        name: "Typescript",
      },
      {
        logo: "/tailwind.svg",
        name: "Tailwind",
      },
    ],

    points: [
      "Login with Clerk auth.",
      "Create or join projects.",
      "Create and manage and assign tasks.",
      "Create tasks in backlog and push them to design.",
      "Design, development and testing deployment of each tasks.",
      "Submit task",
      "Accept or reject task submission (host).",
      "Light and dark theme.",
    ],
    group: [],
  },
  {
    id: "p3",
    title: "Social media app",
    description: "Social media app.",
    images: ["/social/banner"],
    reponame: "social-media",
    link: "https://agile-project-manager.vercel.app",
    techs: [
      {
        logo: "/next.svg",
        name: "Next.js",
      },
      {
        logo: "/clerk.jpg",
        name: "Clerk",
      },
      {
        logo: "/mongodb.svg",
        name: "MongoDB",
      },
      {
        logo: "/uploadthing.png",
        name: "Uploadthing",
      },
      {
        logo: "/ts.svg",
        name: "Typescript",
      },
      {
        logo: "/shad.png",
        name: "Shadcn UI",
      },
      {
        logo: "/tailwind.svg",
        name: "Tailwind",
      },
    ],

    points: [
      "Create post with images and text.",
      "Like and comment on posts.",
      "Infinite scrolling with data fetching.",
      "Light and dark theme.",
    ],
    group: [],
  },
  {
    id: "p4",
    title: "Library management system",
    description: "Simple library management system using cpp.",
    images: ["/library/banner"],
    reponame: "Library-management-system",
    link: "https://github.com/shuva7s/Library-management-system",
    techs: [
      {
        logo: "/cpp.svg",
        name: "C++",
      },
    ],
    points: [
      "Concept of OOP.",
      "Reading and manipulating CSV file.",
      "Add student.",
      "Add book.",
      "Borrow book.",
      "Check borrow list.",
    ],
    group: [],
  },
];

export type TechType = {
  logo: string;
  name: string;
};
export type groupInfoType = {
  dp: string;
  name: string;
  gitHubLink: string;
};
