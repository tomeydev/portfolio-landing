import { Highlight } from "./Highlight";

export type Profile = {
    fullName: string;
    title: string;
    email: string;
    resume: string;
    bio: string;
    skills: string[];
    highlights: Highlight[];
    socialLinks: {
        github: string;
        linkedin: string;
    };
}