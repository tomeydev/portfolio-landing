import "../../App.css"
import { ArrowRight, Github, Linkedin, Smartphone } from "lucide-react"
import { useTranslation } from "react-i18next"
import PrimaryButton from "../atoms/PrimaryButton"
import OutlinedButton from "../atoms/OutlinedButton"
 
export default function Hero() {
    const { t } = useTranslation()
    
    return (
        <section className="min-h-screen flex items-center px-6 lg:px-8 pt-16 justify-center relative overflow-hidden">
            <div className="space-y-8">
                <div className="space-y-4">
                    <p className="font-mono text-sm flex text-primary items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        {t('hero.greeting')}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold text-balance">{t('profile.fullName')}</h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-balance gradient-text">{t('profile.title')}</h2>
                </div>
                <p className=" text-lg text-muted-foreground max-w-2xl">{t('profile.resume')}</p>
                <div className="flex flex-wrap gap-4">
                    <PrimaryButton href="#projects" text={t('hero.cta_projects')} trailingIcon={<ArrowRight />} />
                    <OutlinedButton href="#contact" text={t('hero.cta_contact')} />
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                    <div className="text-sm font-medium py-2">{t('hero.stack_mobile')}</div>
                    <div className="text-sm font-medium py-2">{t('hero.stack_web')}</div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <a href={t('profile.socialLinks.github')} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                    </a>
                    <a href={t('profile.socialLinks.linkedin')} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}
