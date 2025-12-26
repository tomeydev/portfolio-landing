import "../App.css";

type TitleProps = {
    title: string;
    number: string | number;
};

export default function Title({ title, number }: TitleProps) {
    return (
        <div className="space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
                <span className="font-mono text-lg mr-2 text-primary">{number}.</span>
                {title}
            </h2>
            <div className="h-px bg-linear-to-r from-primary via-secondary to-transparent max-w-md" />
        </div>
    );
}
