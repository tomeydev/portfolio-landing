import "../../App.css";
import { ReactNode } from "react";

type PlatformIconProps = {
    leadingIcon?: ReactNode;
    platform: string;
}

export default function PlatformIcon({leadingIcon, platform}: PlatformIconProps) {
    return (
        <div className='flex items-center gap-1'>
            {leadingIcon}
            <span className='text-xs text-muted-foreground'>{platform}</span>
        </div>
    )
}