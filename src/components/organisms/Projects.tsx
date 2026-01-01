import '../../App.css';
import Title from '../atoms/Title';
import { Project as ProjectType} from '../../types/Project'
import ProjectItem from '../molecules/ProjectItem';

export default function Projects() {
    const projects: ProjectType[] = [
        {
            name: "Proyecto Ejemplo",
            description: "Esta es una descripción de ejemplo para un proyecto destacado.",
            image: "/placeholder.svg",
            technologies: ["Android", "Kotlin", "Jetpack Compose"],
            repo: "https://github.com",
            demo: "https://example.com",
            plataform: "Android"
        },
        {
            name: "Proyecto Ejemplo 2",
            description: "Otra descripción de ejemplo para un segundo proyecto destacado.",
            image: "/placeholder.svg",
            technologies: ["iOS", "Swift", "SwiftUI"],
            repo: "https://github.com",
            demo: "https://example.com",
            plataform: "iOS"
        }
    ]

    return (
        <section id='projects' className='py-24 px-6 lg:px-8 relative overflow-hidden'>
            <div className='max-w-6xl mx-auto'>
                <Title title="Apps destacadas" number="03" />
                <div className='grid md:grid-cols-2 gap-8'>
                    {projects.map((project, index) => (
                        <ProjectItem key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}