import "../../App.css"
import Title from "../atoms/Title"
import { useTranslation } from "react-i18next"
import { Experience as ExperienceType } from "../../types/Experience"
import ExperienceItem from "../molecules/ExperienceItem"

export default function Experience() {
    const { t } = useTranslation()
    const experienceData = t('experienceData.items', { returnObjects: true })
    const experiences: ExperienceType[] = Array.isArray(experienceData) ? experienceData : []

    return (
        <section id="experience" className="py-24 px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <Title title={t('experience.section_title')} number="02" />
                <div className="space-y-8">
                    {experiences.map((experience) => (
                        <ExperienceItem key={experience.company} experience={experience} />
                    ))}
                </div>
            </div>
        </section>
    )
}