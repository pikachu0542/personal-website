import { LeadershipEntry } from '@/types'

export const leadership: LeadershipEntry[] = [
    {
        id: 'csh-pr',
        organization: 'Computer Science House',
        location: 'Rochester, NY',
        role: 'Public Relations Director',
        dates: {
            start: '2026-03-15',
            end: '2026-05-31'
        },
        highlights: [
            "Coordinated CSH's attendance at multiple campus-wide accepted student open houses, promoting the organization to prospective students and their families.",
            ""
        ],
        link: {
            label: 'Computer Science House',
            href: 'https://csh.rit.edu/',
            external: true
        },
        logo: {
            src: '/images/logos/csh.jpg',
            alt: 'Computer Science House Logo',
            width: 200,
            height: 200
        }
    },
    {
        id: 'csh-webmaster',
        organization: 'Computer Science House',
        location: 'Rochester, NY',
        role: 'Webmaster',
        dates: {
            start: '2023-09-01',
            end: 'present'
        },
        highlights: [
            "Maintained and deployed multiple web applications through GitHub and Red Hat OpenShift.",
            "Reviewed peer contributions and mentored new contributors on development workflows and services."
        ],
        link: {
            label: 'Computer Science House',
            href: 'https://csh.rit.edu/',
            external: true
        },
        logo: {
            src: '/images/logos/csh.jpg',
            alt: 'Computer Science House Logo',
            width: 200,
            height: 200
        }
    },
    {
        id: 'csh-cm',
        organization: 'Computer Science House',
        location: 'Rochester, NY',
        role: 'Constitutional Maintainer',
        dates: {
            start: '2023-04-28',
            end: 'present'
        },
        highlights: [
            "Maintained and amended the organization's constitution to improve clarity, consistency, and organizational processes and policies.",
            "Served as a subject-matter expert by answering questions, explaining procedures, and facilitating discussions."
        ],
        link: {
            label: 'Computer Science House',
            href: 'https://csh.rit.edu/',
            external: true
        },
        logo: {
            src: '/images/logos/csh.jpg',
            alt: 'Computer Science House Logo',
            width: 200,
            height: 200
        }
    },
    {
        id: 'csh-devcade',
        organization: 'Computer Science House',
        location: 'Rochester, NY',
        role: 'Devcade Project Lead',
        dates: {
            start: '2024-08-26',
            end: '2026-05-31'
        },
        highlights: [
            "Led a team of 10+ students in developing and maintaining a custom arcade machine for the Computer Science House.",
            "Coordinated meetings, assigned tasks, mentored new members, and set goals and deadlines for key features."
        ],
        link: {
            label: 'Devcade Website',
            href: 'https://devcade.csh.rit.edu/',
            external: true
        },
        logo: {
            src: '/images/logos/csh.jpg',
            alt: 'Computer Science House Logo',
            width: 200,
            height: 200
        }
    }
];