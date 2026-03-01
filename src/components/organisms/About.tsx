import "../../App.css";
import Title from "../atoms/Title";
import Icon from "../atoms/Icon";
import { useTranslation } from "react-i18next";
import { Award, Globe, LucideIcon, Smartphone, Zap } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Smartphone: Smartphone,
    Globe: Globe,
    Zap: Zap,
    Award: Award,
}

export default function About() {
    const { t } = useTranslation()
    const bio = t('profile.bio')
    const skills = t('profile.skills', { returnObjects: true })
    const highlights = t('profile.highlights', { returnObjects: true })

    return (
        <section id="about" className="py-24 px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <Title title={t('about.title')} number="01" />

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{bio}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <span className="text-2xl">🛠️</span>
                            {t('about.tech_stack')}
                        </h3>
                        <ul className="grid grid-cols-2 gap-3">
                            {(Array.isArray(skills) ? skills : []).map((skill: string) => (
                                <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span className="text-accent text-lg">▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {(Array.isArray(highlights) ? highlights : []).map((highlight: any) => {
                        const HighlightIcon = iconMap[highlight.icon] || Smartphone;
                        return (
                            <div key={highlight.title} className="space-y-3 hover:scale-105 transition-transform duration-300">
                                <Icon>
                                    <HighlightIcon />
                                </Icon>
                                <h3 className=" font-semibold">{highlight.title}</h3>
                                <p className=" text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
