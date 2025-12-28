import '../../App.css';

type OutlinedButtonProps = {
    href: string,
    text: string,
    leadingIcon?: React.ReactNode,
    trailingIcon?: React.ReactNode,
}

function LeadingIcon({ icon }: { icon?: React.ReactNode }) {
    if (!icon) return null;
    return <div className="inline-block *:h-4 *:w-4 *:mr-2" >{icon}</div>
}

function TrailingIcon({ icon }: { icon?: React.ReactNode }) {
    if (!icon) return null;
    return <div className="inline-block *:h-4 *:w-4 *:ml-2" >{icon}</div>
}

export default function OutlinedButton({ href, text, leadingIcon, trailingIcon }: OutlinedButtonProps) {
    return (
        <button className='inline-flex items-center h-10 rounded-full border px-4 border-primary/50 hover:bg-primary/10 bg-transparent'>
            <LeadingIcon icon={leadingIcon} />
            <a href={href} className='text-sm'>{text}</a>
            <TrailingIcon icon={trailingIcon} />
        </button>
    )
}