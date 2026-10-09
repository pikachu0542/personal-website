export type DateString = string;

export interface DateRange {
  start: DateString;
  end: DateString | "present";
}

export interface Link {
    label: string;
    href: string;
    external?: boolean;
    notes?: string[];
}

export interface ImageAsset {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export type SocialPlatform = 
| "github"
| "linkedin"
| "email"
| "website"
| "gitlab"
| "other";

export interface SocialLink {
    platform: SocialPlatform;
    label: string;
    href: string;
}

// Sets basic info for the site
export interface SiteConfig {
    name: string;
    tagline: string;
    description: string;
    url: string;
    email: string;
    location?: string;
    resumeUrl?: string;
    navLinks: Link[];
    socialLinks: SocialLink[];
}

/* ---------- About (data/about.ts) ---------- */

export interface AboutFact {
  label: string; // ex: based in
  value: string; // ex: New York, NY
}

export interface AboutContent {
  bio: string[]; // one string per paragraph
  facts: AboutFact[];
}

/* ---------- Timeline Entries ---------- */

// A notable event from my resume. Generally used for work experience, education, or leadership roles.
export interface TimelineEntry {
    id: string;
    organization: string;
    location?: string;
    dates: DateRange;
    highlights: string[];
    link?: Link;
    logo?: ImageAsset;
}

// Enum for the type of job
export type EmploymentType = 
| "full-time"
| "part-time"
| "internship";

// A timeline entry for work experience (ie: past jobs)
export interface ExperienceEntry extends TimelineEntry {
    role: string;
    employmentType: EmploymentType;
    technologies?: string[];
}

// A timeline entry for education
export interface EducationEntry extends TimelineEntry {
    degree: string;
    field: string[];
    gpa?: number;
    honors?: string[];
}

// A timeline entry for leadership roles
export interface LeadershipEntry extends TimelineEntry {
    role: string;
}

/* ---------- Skills ---------- */
export interface Skill {
    name: string;
    icon?: string;
}

// Categorize skills for better organization & display
export interface SkillCategory {
    id: string;
    name: string;
    skills: Skill[];
}

/* ---------- Projects ---------- */
export interface Project {
    slug: string; // Unique identifier - basically just an id
    title: string;
    summary: string;
    description?: string;
    technologies: string[];
    links?: {
        live?: string;
        repo?: string;
        blog?: string;
    }
    thumbnail: ImageAsset;
    images?: ImageAsset[];
    featured?: boolean;
}

/* ---------- Hobbies ---------- */
export interface Hobby {
    id: string;
    title: string;
    summary: string;
    description?: string;
    coverImage: ImageAsset;
    gallery?: ImageAsset[];
    links?: Link[];
    tags?: string[];
}

/* ---------- Blog (content/posts/*.md) ---------- */
export interface Post {
  slug: string; // from the file name: my-post.md becomes /blog/my-post
  title: string;
  date: string; // "YYYY-MM-DD"
  summary: string;
  tags: string[];
  draft: boolean;
  content: string; // the markdown body
  readingMinutes: number;
}