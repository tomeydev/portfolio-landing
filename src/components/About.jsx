import "../App.css";

export default function About() {
    
    const skills = [
        "Swift & SwiftUI",
        "Kotlin & Jetpack Compose",
        "React Native",
        "Flutter",
        "iOS SDK",
        "Android SDK",
        "Firebase",
        "REST & GraphQL",
        "CI/CD",
        "App Store Optimization",
        "Mobile UI/UX",
        "Performance Optimization",
    ];

    const highlights = [
        { title: "Desarrollo Nativo", description: "Experto en iOS y Android con código nativo optimizado" },
        { title: "Cross-Platform", description: "Construcción de apps híbridas con React Native y Flutter" },
        { title: "Diseño Intuitivo", description: "Creación de interfaces móviles atractivas y fáciles de usar" },
        { title: "Rendimiento", description: "Optimización para velocidad y eficiencia en dispositivos móviles" },
    ]

    return(
        <section id="about" className="py-24 px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="font-mono text-lg mr-2 text-primary">01.</span>
                        Sobre mí
                    </h2>
                    <div className="h-px bg-linear-to-r from-primary via-secondary to-transparent max-w-md" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <p className="text-muted-foreground leading-relaxed">
                            Mi pasión por el desarrollo móvil comenzó hace más de 6 años cuando publiqué mi primera app en la App Store. 
                            Desde entonces, he creado experiencias móviles para startups innovadoras y empresas Fortune 500.
                            Me especializo en construir aplicaciones móviles que los usuarios aman usar. Combino desarrollo nativo de 
                            alto rendimiento con diseños intuitivos que se sienten naturales en cada plataforma.
                            Actualmente trabajo como Senior Mobile Engineer en una startup fintech, donde lidero el desarrollo de 
                            apps iOS y Android que procesan millones de transacciones diarias.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <span className="text-2xl">🛠️</span>
                            Stack Tecnológico
                        </h3>
                        <ul className="grid grid-cols-2 gap-3">
                            {skills.map((skill) => (
                                <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span className="text-accent text-lg">▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item) => (
                        <div className="space-y-3 hover:scale-105 transition-transform duration-300">
                            <h3 className=" font-semibold">{item.title}</h3>
                            <p className=" text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}