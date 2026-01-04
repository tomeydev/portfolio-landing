import { useEffect, useState } from "react";
import "../../App.css";
import MenuButton from "../atoms/MenuButton";   

type NavItem = { label: string; href: string };

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

    const navItems: NavItem[] = [
        { label: "Sobre mí", href: "#about" },
        { label: "Experiencia", href: "#experience" },
        { label: "Proyectos", href: "#projects" },
        { label: "Contacto", href: "#contact" },
    ];

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
                    <MenuButton 
                        isMobileMenuOpen={isMobileMenuOpen} 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                    />
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
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
