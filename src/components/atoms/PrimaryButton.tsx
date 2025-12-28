import '../../App.css'

type PrymaryButtonProps = {
    href: string,
    text: string,
    leadingIcon?: React.ReactNode,
    trailingIcon?: React.ReactNode,
}

function LeadingIcon({ icon }: { icon?: React.ReactNode }) {
    if (!icon) return null;
    return <div className="inline-block *:h-4 *:w-4 *:mr-2 text-white" >{icon}</div>
}

function TrailingIcon({ icon }: { icon?: React.ReactNode }) {
    if (!icon) return null;
    return <div className="inline-block *:h-4 *:w-4 *:ml-2 text-white" >{icon}</div>
}

export default function PrimaryButton({ href, text, leadingIcon, trailingIcon }: PrymaryButtonProps) {
    return (
        <button className='inline-flex items-center h-10 rounded-full px-4 bg-linear-to-r from-primary to-secondary hover:opacity-90 transition-opacity'>
            <LeadingIcon icon={leadingIcon} />
            <a href={href} className='text-white text-sm'>{text}</a>
            <TrailingIcon icon={trailingIcon} />
        </button>
    )
}