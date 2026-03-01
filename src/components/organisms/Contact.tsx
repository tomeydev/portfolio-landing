import '../../App.css';
import { Mail, MessageSquare, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PrimaryButton from '../atoms/PrimaryButton';
import OutlinedButton from '../atoms/OutlinedButton';

export default function Contact() {
    const { t } = useTranslation()
    const email = t('profile.email')
    const linkedinUrl = t('profile.socialLinks.linkedin')
    const fullName = t('profile.fullName')

    return(
        <section id='contact' className='py-24 px-6 lg:px-8 relative overflow-hidden'>
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-primary/10 via-secondary/10 to-accent/10 blur-3xl" />
            </div>
            <div className='space-y-8 text-center max-w-2xl mx-auto'>
                <div className='space-y-2'>
                    <p className='flex text-sm font-mono text-primary items-center justify-center gap-2'>
                        <MessageSquare className='h-4 w-4'/>
                        {t('contact.section_label')}
                    </p>
                    <h2 className='text-3xl md:text-5xl py-2 font-bold text-balance gradient-text'>{t('contact.title')}</h2>
                </div>
                <p className='text-lg text-muted-foreground text-wrap leading-relaxed'>
                    {t('contact.description')}
                </p>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <PrimaryButton href={`mailto:${email}`} leadingIcon={<Mail className='h-4 w-4' />} text={t('contact.cta_email')} />
                    <OutlinedButton href={linkedinUrl} leadingIcon={<Linkedin className='h-4 w-4' />} text={t('contact.cta_linkedin')} />
                </div>
            </div>
            <footer className="mt-24 pt-8 pb-8 border-t border-gray-300 text-center">
                <p className="text-sm text-muted-foreground">{t('contact.footer_credit')} {fullName}</p>
                <p className="text-xs text-muted-foreground mt-2">{t('contact.footer_copyright')}</p>
            </footer>
        </section>
    )
}