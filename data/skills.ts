import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
    {
        id: "languages",
        name: "Languages",
        skills: [
            { name: "C#" },
            { name: "Java" },
            { name: "JavaScript" },
            { name: "TypeScript"},
            { name: "Python" },
            { name: "SQL"},
            { name: "HTML" },
            { name: "CSS" },
            { name: "C++" },
            { name: "Bash" },
        ],
    },
    {
        id: "libraries",
        name: "Libraries & Frameworks",
        skills: [
            { name: "React" }, 
            { name: "Next.js" }, 
            { name: "Tailwind CSS" },
            { name: "Node.js" },
            { name: "Express" },
            { name: "MonoGame" },
            { name: "ASP.NET" },
            { name: "Bootstrap"},
            { name: "Flask" },
            { name: "SQLAlchemy" },
        ],
    },
    {
        id: "technologies",
        name: "Technologies",
        skills: [
            { name: "Git" },
            { name: "Docker" },
            { name: "MySQL" },
            { name: "PostgreSQL" },
            { name: "Linux" },
            { name: "AWS Lambda" },
            { name: "REST APIs" },
            { name: "Nginx" },
            { name: "S3" },
            { name: "Unity" },
            { name: "Microsoft Access" },
        ],
    },
];