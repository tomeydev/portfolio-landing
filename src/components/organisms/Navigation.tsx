import { useEffect, useState } from "react";
import "../../App.css";
import { NavItem } from "../../types/NavItem";
import { useTranslation } from "react-i18next";
import MenuButton from "../atoms/MenuButton";
import ThemeToggle from "../atoms/ThemeToggle";
import LanguageToggle from "../atoms/LanguageToggle";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const { t } = useTranslation()
    const navItemsData = t("navigation.items", { returnObjects: true });
    const navItems: NavItem[] = Array.isArray(navItemsData) ? navItemsData : []


    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-overlay
            ${isScrolled || isMobileMenuOpen ? "scrolled backdrop-blur-md" : ""}`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px:8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="font-mono text-lg font-bold text-primary">{"<tomey.dev/>"}</a>
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <LanguageToggle />
                        <MenuButton 
                            isMobileMenuOpen={isMobileMenuOpen} 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                        />
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-border flex gap-2">
                                <ThemeToggle />
                                <LanguageToggle />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
