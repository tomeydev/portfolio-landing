import { useTranslation } from 'react-i18next';
import '../../App.css';

export default function LanguageToggle() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="size-9 inline-flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-primary font-mono font-semibold text-sm"
            aria-label={i18n.t('language_toggle.label')}
            title={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
            {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>
    );
}
