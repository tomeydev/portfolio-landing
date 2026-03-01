import '../../App.css';
import Title from '../atoms/Title';
import { useTranslation } from 'react-i18next';
import { Project as ProjectType} from '../../types/Project'
import ProjectItem from '../molecules/ProjectItem';

export default function Projects() {
    const { t } = useTranslation()
    const projectData = t('projectsData.items', { returnObjects: true })
    const projects: ProjectType[] = Array.isArray(projectData) ? projectData : []

    return (
        <section id='projects' className='py-24 px-6 lg:px-8 relative overflow-hidden'>
            <div className='max-w-6xl mx-auto'>
                <Title title={t('projects.section_title')} number="03" />
                <div className='grid md:grid-cols-2 gap-8'>
                    {projects.map((project, index) => (
                        <ProjectItem key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}