import "../App.css";

export default function Navigation() {
    const navItems = [
        { label: "Sobre mí", href: "#about" },
        { label: "Experiencia", href: "#experience" },
        { label: "Proyectos", href: "#projects" },
        { label: "Contacto", href: "#contact" },
    ];

    return (
        <nav>
            <div className="nav-list">
                <div id="logo">
                    <a href="#home">{"<tomey.dev/>"}</a>
                </div>
                <div id="nav-links">
                    {navItems.map((item) => (
                        <a key={item.label} href={item.href}>
                        {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
