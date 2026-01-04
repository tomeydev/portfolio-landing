import '../../App.css';
import { Menu, X } from 'lucide-react';

type MenuButtonProps = {
    isMobileMenuOpen: boolean,
    onClick: () => void,
}

export default function MenuButton({isMobileMenuOpen, onClick}: MenuButtonProps) {
    return (
        <button 
            className='inline-flex md:hidden size-9 items-center rounded-full justify-center 
                hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50-8' 
            onClick={onClick}
        >
            {isMobileMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </button>
    )
}