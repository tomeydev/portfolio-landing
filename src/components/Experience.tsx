import "../App.css"
import Title from "./Title"
import Icon from "./Icon"
import { Smartphone, ExternalLink, Github } from "lucide-react"
import { ComponentType, ReactElement } from "react"

type ExperienceItem = {
    role: string
    company: string
    companyUrl: string
    period: string
    description: string
    tecnologies: string[]
    icon: ComponentType<any>
}

export default function Experience() {
    const experiences: ExperienceItem[] = [
        {
            role: "Mobile Engineer",
            company: "Tech Solutions",
            companyUrl: "https://google.com",
            period: "Jan 2020 - Present",
            description:
                "Desarrollé aplicaciones móviles nativas y cross-platform, mejorando la experiencia del usuario y optimizando el rendimiento.",
            tecnologies: ["Swift", "Kotlin", "React Native", "Flutter"],
            icon: Smartphone,
        },
    ]

    return (
        <section id="experience" className="py-24 px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <Title title="Experiencia" number="02" />
                <div className="space-y-8">
                    {experiences.map((experience) => {
                        const IconComp = experience.icon
                        return (
                            <div key={`${experience.company}-${experience.period}`} className="gradient-border p-8 hover:scale-[1.02] transition-transform duration-300">
                                <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                                    <div className="flex flex-col gap-4">
                                        <div className="text-sm text-muted-foreground font-mono">{experience.period}</div>
                                        <Icon>
                                            <IconComp />
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
                        )
                    })}
                </div>
            </div>
        </section>
    )
}