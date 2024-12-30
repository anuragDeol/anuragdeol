import deskeraCopilot from "@/../public/assets/images/deskera-copilot.png";
import deskeraWebsite from "@/../public/assets/images/deskera-website.png";
import deskeraBooks from "@/../public/assets/images/deskera-books.png";
import codeial from "@/../public/assets/images/codeial.png";
import findMyMeal from "@/../public/assets/images/find-my-meal.png";
import tenzies from "@/../public/assets/images/tenzies.png";
import musicPlayer from "@/../public/assets/images/music-player.png";
import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Deskera Copilot",
    description:
      "AI assistant for accounting automation and business insights integrated with Deskera software suite. This is WIP, so Live Link redirects to Deskera's AI page for now.",
    tags: ["React", "deskera-ui-library"],
    imageUrl: deskeraCopilot,
    actions: [{
      title: "Live Link",
      url: "https://www.npmjs.com/package/deskera-copilot"
    }]
  },
  {
    title: "Deskera Website",
    description:
      "Migrated Deskera's main website from Gatsby to Next.js, improving performance and scalability while ensuring seamless user experience.",
    tags: ["React", "Next", "Tailwind"],
    imageUrl: deskeraWebsite,
    actions: [{
      title: "Live Link",
      url: "https://deskera.com/"
    }]
  },
  {
    title: "Deskera Books",
    description:
      "Deskera Books is a comprehensive accounting platform that simplifies financial management for businesses.",
    tags: ["React", "deskera-ui-library"],
    imageUrl: deskeraBooks,
    actions: [{
      title: "Live Link",
      url: "https://booksplus.deskera.com/"
    }],
  },
  {
    title: "Codeial",
    description:
      "A capstone project that I built during my bootcamp, it has all the features of a social media platform including CRUD operations.",
    tags: ["EJS", "Node", "Express", "MongoDB"],
    imageUrl: codeial,
    actions: [{
      title: "Github Link",
      url: "https://github.com/anuragDeol/codeial-social-media-app"
    }],
  },
  {
    title: "Find my meal",
    description:
      "Find My Meal is a meal finder app built during my bootcamp, allowing users to search, save, and view meal details with a persistent favorite meals list.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: findMyMeal,
    actions: [
      {
        title: "Live Link",
        url: "https://anuragdeol.github.io/meal-finder-app/"
      },
      {
        title: "Github Link",
        url: "https://github.com/anuragDeol/meal-finder-app"
      }
    ],
  },
  {
    title: "Tenzies",
    description:
      "Tenzies is a fun little dice-rolling game where players aim to score points by rolling ten matching dice.",
    tags: ["React"],
    imageUrl: tenzies,
    actions: [
      {
        title: "Live Link",
        url: "https://stunning-biscotti-497ca9.netlify.app/"
      },
      {
        title: "Github Link",
        url: "https://github.com/anuragDeol/tenzies-game"
      }
    ]
  },
  {
    title: "Music Player",
    description:
      "My first ever project, a music player built using HTML.",
    tags: ["HTML", "CSS"],
    imageUrl: musicPlayer,
    actions: [
      {
        title: "Github Link",
        url: "https://github.com/anuragDeol/music-player"
      },
      {
        title: "Video",
        url: "https://youtu.be/aoQDGR6s8sc"
      }
    ]
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Java",
  "Data Structures & Algorithms"
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Remote",
    org: "Deskera",
    description: "Developing the key features for Deskera's ERP platform and AI Copilot. Focused on creating scalable solutions and improving user experience across multiple products including the main website and Deskera Books.",
    icon: React.createElement(FaRegDotCircle),
    date: "Oct'23 - Present",
  },
  {
    title: "Software Engineer Trainee",
    location: "Remote",
    org: "Deskera",
    description: "Built and implemented the frontend for Deskera's AI assistant from the ground up. Contributed to the development of responsive UI components and integrated core platform services.",
    icon: React.createElement(FaRegDotCircle),
    date: "June'23 - Oct'23",
  },
  {
    title: "Freelance Software Engineer",
    location: "Remote",
    org: "TeacherOn",
    description: "Provided personalized DSA mentorship to clients, creating custom learning plans and helping them develop problem-solving skills. Focused on competitive programming techniques and interview preparation.",
    icon: React.createElement(FaRegDotCircle),
    date: "Feb'23 - May'23",
  },
  {
    title: "Teaching Assistant",
    location: "Remote",
    org: "Coding Ninjas",
    description: "Mentored over 1,000 students in Data Structures and Algorithms, maintaining a 4.9/5 feedback rating. Helped students improve their problem-solving skills through personalized guidance and support.",
    icon: React.createElement(FaRegDotCircle),
    date: "Sept'22 - Jan'23",
  }
] as const;