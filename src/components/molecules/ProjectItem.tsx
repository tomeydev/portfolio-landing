import '../../App.css';
import { Project } from '../../types/Project';
import { Smartphone, Github, ExternalLink } from 'lucide-react';
import OutlinedButton from '../atoms/OutlinedButton';
import PrimaryButton from '../atoms/PrimaryButton';

type ProjectItemProps = {
    project: Project
}

export default function ProjectItem({ project }: ProjectItemProps) {
    return (
        <div className='group overflow-hidden bg-card shadow-sm rounded-xl hover:scale-[1.02] transition-all duration-300'>
            <div className='relative aspect-video overflow-hidden'>
                <img 
                    src={project.image || '/placeholder.svg'} 
                    alt={project.name} 
                    className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-500'
                />
            </div>
            <div className='p-6 space-y-4'>
                <h3 className='text-xl font-semibold gradient-text'>{project.name}</h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>{project.description}</p>
                <div className='flex items-center gap-1'>
                    <Smartphone className='w-3 h-3' />
                    <span className='text-xs text-muted-foreground'>2M+ descargas</span>
                </div>
                <div className='flex flex-wrap gap-4'>
                    {project.technologies.map((tech) => (
                        <span key={tech} className='text-xs text-muted-foreground font-mono'>{tech}</span>
                    ))}
                </div>
                <div className='flex flex-wrap gap-3 pt-2'>
                    <OutlinedButton href={project.repo} leadingIcon={<Github />} text='Código'/>
                    <PrimaryButton href={project.demo} leadingIcon={<ExternalLink />} text='Ver Demo' />
                </div>
            </div>
        </div>
    )
}
