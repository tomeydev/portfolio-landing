import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import '../../App.css';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="size-9 inline-flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-primary"
            aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
        >
            {theme === 'light' ? (
                <Moon className="h-5 w-5 transition-transform duration-300 rotate-0" />
            ) : (
                <Sun className="h-5 w-5 transition-transform duration-300 rotate-180" />
            )}
        </button>
    );
}
