import { EducationEntry } from '@/types';

export const education: EducationEntry[] = [
    {
        id: "rit",
        organization: "Rochester Institute of Technology",
        location: "Rochester, NY",
        degree: "Bachelor of Science",
        field: ["Game Design and Development", "Computing and Information Technologies"],
        gpa: 3.74,
        honors: ["Dean's List", "Magna Cum Laude"],
        dates: {
            start: "2021-09-01",
            end: "2025-05-01",
        },
        logo: {
            src: "/images/logos/rit.png",
            alt: "Rochester Institute of Technology Logo",
            width: 200,
            height: 200,
        },
        highlights: []
    },
];