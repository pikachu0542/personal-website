import { SiteConfig } from "@/types";

export const site: SiteConfig = {
    name: "Ella Soccoli",
    tagline: "Motivated Software Developer who loves to learn and create.",
    description: "Portfolio website for Ella Soccoli.",
    url: "https://ellasoccoli.com", // THIS IS PLACEHOLDER I DONT HAVE A DOMAIN YET
    email: "soccoli2015@gmail.com",
    location: "NY, USA",
    resumeUrl: "/resume.pdf", // PLACEHOLDER; TODO: ADD RESUME TO PROJECT
    navLinks: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Blog", href: "/blog" },
        { label: "Hobbies", href: "/hobbies" },
        { label: "Contact", href: "/contact" },
    ],
    socialLinks: [
        { platform: "github", label: "GitHub", href: "https://github.com/pikachu0542" },
        { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ella-soccoli/" },
        { platform: "email", label: "Email", href: "mailto:soccoli2015@gmail.com" },
    ],
};