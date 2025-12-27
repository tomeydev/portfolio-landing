import '../App.css'
import { Smartphone, ExternalLink } from 'lucide-react'
import Icon from './Icon'
import { Experience } from '../types/experience'

type ExperienceItemProps = {
    experience: Experience
}

export default function ExperienceItem({experience}: ExperienceItemProps) {
    return (
        <div className="gradient-border p-8 hover:scale-[1.02] transition-transform duration-300">
            <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                <div className="flex flex-col gap-4">
                    <div className="text-sm text-muted-foreground font-mono">{experience.period}</div>
                    <Icon>
                        <Smartphone />
                    </Icon>
                </div>
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-xl font-medium gradient-text">{experience.role}</span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-xl font-medium">{experience.company}</span>
                        <a href={experience.companyUrl} target="_blank" className="relative text-primary hover:text-secondary transition-colors">
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{experience.description}</p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {experience.tecnologies.map((tech) => (
                            <span key={tech} className="px-2 font-mono text-xs text-primary">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}