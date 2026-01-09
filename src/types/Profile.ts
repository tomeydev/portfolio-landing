import { Highlight } from "./Highlight";

export type Profile = {
    resume: string;
    bio: string;
    skills: string[];
    highlights: Highlight[];
    socialLinks: {
        github: string;
        linkedin: string;
    };
}