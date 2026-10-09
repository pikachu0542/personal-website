import { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
    {
        id: "lm-swe-intern-2025",
        organization: "Liberty Mutual",
        role: "Software Engineer Intern",
        employmentType: "internship",
        dates: {
            start: "2025-05-19",
            end: "2025-08-01",
        },
        highlights: [
            "Expanded an AWS Lambda function using Python to automate daily financial reconciliation, ensuring scheduled execution."
        ],
        technologies: ["Python", "AWS Lambda", "Agile Methodologies", "Jira", "MacOS", "Git"],
        logo: {
            src: "/images/logos/liberty-mutual.png",
            alt: "Liberty Mutual Logo",
            width: 200,
            height: 200,
        },
    },
    {
        id: "lm-swe-intern-2024",
        organization: "Liberty Mutual",
        role: "Software Engineer Intern",
        employmentType: "internship",
        dates: {
            start: "2024-05-20",
            end: "2024-08-02",
        },
        highlights: [
            "Refactored a relational database service within existing infrastructure, reducing annual operating costs by $6,000.",
            "Redesigned a jet reservation form using React and TypeScript, improving workflow clarity for 30+ executives.",
        ],
        technologies: ["React", "TypeScript", "HTML", "CSS", "Agile Methodologies", "Jira", "Git"],
        logo: {
            src: "/images/logos/liberty-mutual.png",
            alt: "Liberty Mutual Logo",
            width: 200,
            height: 200,
        },
    },
    {
        id: "sj-de-intern-2023",
        organization: "SJ Associates",
        role: "Data Engineer Intern",
        employmentType: "internship",
        dates: {
            start: "2023-05-20",
            end: "2023-08-02",
        },
        highlights: [
            "Developed SQL queries to extract and organize data from a company database for reporting and data views.",
            "Recreated Microsoft Access interfaces as web apps using C# and ASP.NET, presenting database results in accessible formats.",
        ],
        technologies: ["C#", "ASP.NET", "SQL", "Microsoft Access", "HTML", "CSS", "Git"],
        logo: {
            src: "/images/logos/sj-associates.png",
            alt: "SJ Associates Logo",
            width: 200,
            height: 200,
        },
    },
    {
        id: "ta-part-time",
        organization: "Rochester Institute of Technology",
        role: "Teaching Assistant",
        employmentType: "part-time",
        dates: {
            start: "2024-08-26",
            end: "2026-05-10",
        },
        highlights: [
            "Supported 30+ students with C# programming coursework, debugging code and troubleshooting software errors.",
            "Graded C# assignments and provided feedback on code quality, correctness, and programming concepts.",
        ],
        technologies: ["C#", "MonoGame"],
        logo: {
            src: "/images/logos/rit-igm.png",
            alt: "Logo for the Department of Interactive Games and Media at Rochester Institute of Technology",
        },
    },
];