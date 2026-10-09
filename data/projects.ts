import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "csh-nominate",
    title: "CSH Nominate",
    summary: "A full-stack web application for managing and submitting nominations for the Computer Science House (CSH).",
    description: "CSH Nominate is a full-stack web application designed to streamline the nomination process CSH executive board elections. It allows members to easily submit nominations, ad automates the process of notifying nominees and tracking responses. The application is built with Go, Gin, and PostgreSQL, and features a responsive design using Go templates and Bootstrap CSS. The backend is powered by Gin, a high-performance web framework for Go, and uses SQLC for type-safe database queries.",
    technologies: ["Go", "PostgreSQL", "Gin", "SQLC", "Bootstrap"],
    links: {
      repo: "https://github.com/pikachu0542/nominate",
    },
    thumbnail: {
      src: "/images/projects/csh-nominate/thumbnail.png",
      alt: "Screenshot of the CSH Nominate web application.",
    },
  },
  {
      slug: "beehive-monitoring",
      title: "Beehive Monitoring System",
      summary: "A system for remotely monitoring beehives using IoT devices and a web dashboard.",
      description: "Designed and built a remote beehive monitoring system as part of a six-person engineering team, integrating embedded hardware, wireless communication, databases, and web infrastructure. I designed the MySQL database schema, configured an Ubuntu VM to host the project infrastructure, and configured Nginx to serve the frontend and reverse proxy requests to the Node.js/Express.js backend. I also collaborated on C++ firmware for a Heltec ESP32-LoRa V3 to collect and transmit temperature readings every 10 minutes via LoRa, using deep sleep between readings to minimize power consumption and achieve a target battery life of one year.",
      technologies: ["C++", "MySQL", "Nginx", "Ubuntu Linux", "ESP-32", "LoRa"],
      thumbnail: {
        src: "/images/projects/beehive-monitoring/thumbnail.png",
        alt: "Screenshot of the Beehive Monitoring System web dashboard.",
      },
  },
  {
    slug: "csh-project-form",
    title: "Upgrades to the CSH Project Submission Form",
    summary: "Enhanced the CSH project submission form, adding new fields to allow members to more effectively showcase their projects.",
    description: "Expanded a project submission form with skill tagging, project details, validation, and image uploads, implementing Flask backend logic to securely store uploaded images in Amazon S3. Developed SQLAlchemy queries in Python to retrieve project and skill data from related database tables, enabling dynamic presentation of project information on the frontend.",
    technologies: ["Python", "Flask", "SQLAlchemy", "Amazon S3"],
    thumbnail: {
      src: "/img/projects/csh-mp-form/thumbnail.png",
      alt: "Screenshot of the CSH Project Submission Form.",
    },
    links: {
      repo: "https://github.com/ComputerScienceHouse/conditional",
      blog: "https://csh.rit.edu/projects/2026/04/30/major-project-form-improvements.html",
    },

  },
  {
    slug: "csh-vote",
    title: "Upgrades to the CSH Voting System",
    summary: "Enhanced the CSH voting system, adding various new features to improve the voting experience for members.",
    description: `
    Implemented dynamic voting-status banners using Go templates to provide contextual messaging and styling based on user status. Upgraded the application from Bootstrap 4 to Bootstrap 5, improving usability across the site while enhancing the poll creation interface with clearer forms, expanded input options, and additional configuration settings.
    `,
    technologies: ["Go", "Gin", "Bootstrap", "MongoDB"],
    links: {
      repo: "https://github.com/ComputerScienceHouse/vote"
    },
    thumbnail: {
      src: "/img/projects/csh-vote/thumbnail.png",
      alt: "Home page of the CSH voting platform.",
    },
    images: [
      {
        src: "/img/projects/csh-vote/create-poll.png",
        alt: "Poll creation page"
      },
      {
        src: "/img/projects/csh-vote/open-poll-regular.png",
        alt: "Page to vote on an open poll with multiple choice options"
      },
      {
        src: "/img/projects/csh-vote/open-poll-ranked.png",
        alt: "Page to vote on an open poll with ranked choice style voting"
      },
      {
        src: "/img/projects/csh-vote/poll-results.png",
        alt: "Results of a poll"
      },
      {
        src: "/img/projects/csh-vote/hidden-results.png",
        alt: "Page indicating that results of a poll are hidden",
        width: 300,
      }
    ]
  },
  {
    slug: "brick-breaker",
    title: "Brick Breaker",
    summary: "A recreation of Atari's Breakout built in C# with MonoGame.",
    description: "Developed an Atari Breakout recreation from scratch in C# using MonoGame, implementing dynamic component positioning to support non-standard 21:9 and vertical display configurations. Demonstrated the project at OpenSauce 2026 and Imagine RIT, presenting its functionality and answering technical questions from attendees at events with 3,000+ visitors.",
    technologies: ["C#", "MonoGame"],
    links: {
      repo: "https://github.com/pikachu0542/BrickBreaker"
    },
    thumbnail: {
      src: "/img/projects/brick-breaker/thumbnail.png",
      alt: "Initial gamestate with all the bricks in a grid.",
    },
  },
]