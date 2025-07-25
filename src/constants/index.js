import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nextJs,
  postman,
  java,
  bootstrap,
  githubTech,
  VerbiQLogo,
  myntra,
  VerbiQ,
  userAuth,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "nextJs",
    icon: nextJs,
  },
  // {
  //   name: "GitHub",
  //   icon: githubTech,
  // },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Postman APIs",
    icon: postman,
  },
  // {
  //   name: "bootstrap",
  //   icon: bootstrap,
  // },
];

const experiences = [
  {
    title: "Full Stack Software Engineer Intern",
    company_name: "Qurocity",
    icon: VerbiQLogo,
    iconBg: "#ffffff",
    date: "April 2025 - September 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Built scalable APIs in Node.js and Express, reducing response time by 30%",
      "Manage a database form our VerbiQ.ai platform with Mongo Db database ",
    ],
  },
];

const projects = [
  {
    name: "Full-Stack E-Commerce Web App",
    description: `Developed a responsive Myntra-like e-commerce SPA using React, Redux Toolkit, and React Router, ensuring consistent performance across all devices.
Design and integrated RESTful Express.js APIs to power product catalogue browsing, bag/Wishlist management, and real-time price calculation.
Implemented advanced product functionality: filters (price, discount, category), sorting, search, “add-to-bag”, “Wishlist”, and “view” similar items features.
Developed a secure user authentication system with real-time email-based OTP verification using Node mailer and Express.js.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Express JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
    ],
    image: myntra,
    source_code_link:
      "https://github.com/Shadab786-developer/Myntra-clone-React.git",
    deployed_link: "https://myntra-clone-react-two.vercel.app/",
  },
  {
    name: "VerbiQ.ai",
    description: `Contributed to building a responsive React-based user interface for an enterprise document access platform.
Assisted in integrating secure file upload and retrieval APIs using Express and Multer.
Supported frontend enhancements for real-time document preview, search, and categorization of uploaded files.
Implemented basic role-base access control (RBAC) on backend routes to manage user permissions for uploading and viewing.
Collaborated on integrating authentication flow and managing user sessions securely using JWT.
Participated in UI improvement efforts to align with responsive design standards and clean user experience principles.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Express JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: VerbiQ,
    source_code_link: "https://github.com/Qurocity-ai/VerbiQ.ai.git",
    deployed_link: "https://www.verbiq.ai/",
  },
  {
    name: "Secure Auth + Email Verification Web App",
    description: `Contributed to developing a secure full-stack authentication system using Next.js API routes, bcrypt JS, and JWT,      enabling protected user login sessions.
Integrated email verification flow using Nod emailer, enabling real-time code dispatch and validation for account activation.
Configured MongoDB with Mongoose to store and manage user data, including encrypted passwords and session tokens.
Built responsive user interfaces using React 19 + Tailwind CSS, implementing toast notifications for real-time user feedback.
Collaborated on backend API logic including token validation, error handling, and secure routing within the Next.js architecture.`,
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: userAuth,
    source_code_link:
      "https://github.com/Shadab786-developer/User-Auth-By-Next.git",
  },
];

export { services, technologies, experiences, projects };
