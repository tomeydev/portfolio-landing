import "../App.css"
import { ArrowRight, Github, Linkedin, Smartphone } from "lucide-react"

export default function Index() {
    return (
        <section className="min-h-screen flex items-center px-6 justify-center">
            <div className="space-y-8">
                <div className="space-y-4">
                    <p className="font-mono text-sm flex text-primary items-center gap-2">
                    <Smartphone className="h-4 w-4"/>
                    Hola, soy
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold text-balance">Pablo Tomey</h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-balance gradient-text">Creando experiencias moviles excepcionales</h2>
                </div>
                <p className=" text-lg text-muted-foreground max-w-2xl">
                    Mobile Engineer especializado en iOS y Android. Construyo aplicaciones nativas y 
                    cross-platform que combinan diseño elegante con rendimiento excepcional, llegando a millones de usuarios.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button>
                        <a href="#projects">Ver mis apps</a>
                        <ArrowRight className="inline-block h-4 w-4 ml-2" />
                    </button>
                    <button>
                        <a href="#contact">Contactar</a>   
                    </button>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                    <div className="text-sm font-medium py-2">Android • Kotlin • Jetpack</div>
                    <div className="text-sm font-medium py-2">iOS • Swift • SwiftUI</div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <a href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}