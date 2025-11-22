import "../App.css"
import { Github, Linkedin, Smartphone } from "lucide-react"

export default function Main() {
    return (
        <section>
            <p>
              <Smartphone/>
              Hola, soy
            </p>
            <h1>Pablo Tomey</h1>
            <h2>Creando experiencias moviles</h2>
            <p>Mobile Engineer especializado en iOS y Android. Construyo aplicaciones nativas y cross-platform que combinan diseño elegante con rendimiento excepcional, llegando a millones de usuarios.</p>
            <div>
                <button>Ver mis apps</button>
                <button>Contactar</button>
            </div>
            <div>
                <div>Android • Kotlin • Jetpack</div>
                <div>iOS • Swift • SwiftUI</div>
            </div>

            <div>
                <a href="https://github.com" target="_blank">
                    <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-5 w-5" />
                </a>
            </div>
        </section>
    );
}