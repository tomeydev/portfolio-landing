import '../../App.css';
import { Mail, MessageSquare, Download } from 'lucide-react';
import PrimaryButton from '../atoms/PrimaryButton';
import OutlinedButton from '../atoms/OutlinedButton';

export default function Contact() {
    return(
        <section id='contact' className='py-24 px-6 lg:px-8 relative overflow-hidden'>
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-primary/10 via-secondary/10 to-accent/10 blur-3xl" />
            </div>
            <div className='space-y-8 text-center max-w-2xl mx-auto'>
                <div className='space-y-2'>
                    <p className='flex text-sm font-mono text-primary items-center justify-center gap-2'>
                        <MessageSquare className='h-4 w-4'/>
                        04. ¿y ahora que sigue?
                    </p>
                    <h2 className='text-3xl md:text-5xl py-2 font-bold text-balance gradient-text'>Construyamos algo increíble</h2>
                </div>
                <p className='text-lg text-muted-foreground text-wrap leading-relaxed'>
                    Estoy disponible para proyectos de desarrollo móvil, consultoría técnica y colaboraciones. 
                    Si tienes una idea de app o necesitas un mobile engineer experimentado, hablemos.
                </p>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <PrimaryButton href="mailto:ptomey@gmail.com" leadingIcon={<Mail className='h-4 w-4' />} text="Enviar mensaje" />
                    <OutlinedButton href="https://linkedin.com" leadingIcon={<Download className='h-4 w-4' />} text="Descargar CV" />
                </div>
            </div>
            <footer className="mt-24 pt-8 pb-8 border-t border-gray-300 text-center">
                <p className="text-sm text-muted-foreground">Diseñado y construido por Pablo Tomey</p>
                <p className="text-xs text-muted-foreground mt-2">© 2026 Todos los derechos reservados</p>
            </footer>
        </section>
    )
}