import '../../App.css';
import Title from '../atoms/Title';
import projectData from '../../data/projects.json';     
import { Project as ProjectType} from '../../types/Project'
import ProjectItem from '../molecules/ProjectItem';

export default function Projects() {
    const projects: ProjectType[] = projectData;

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