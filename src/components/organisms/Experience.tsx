import "../../App.css"
import Title from "../atoms/Title"
import { Experience as ExperienceType } from "../../types/Experience"
import ExperienceItem from "../molecules/ExperienceItem"

export default function Experience() {
    const experiences: ExperienceType[] = [
        {
            role: "Mobile Engineer",
            company: "Tech Solutions",
            companyUrl: "https://google.com",
            period: "Jan 2020 - Present",
            description:"Desarrollé aplicaciones móviles nativas y cross-platform, mejorando la experiencia del usuario y optimizando el rendimiento.",
            technologies: ["Swift", "Kotlin", "React Native", "Flutter"],
        },
    ]

    return (
        <section id="experience" className="py-24 px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <Title title="Experiencia" number="02" />
                <div className="space-y-8">
                    {experiences.map((experience) => (
                        <ExperienceItem key={experience.company} experience={experience} />
                    ))}
                </div>
            </div>
        </section>
    )
}