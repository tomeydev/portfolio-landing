import "../../App.css";
import { ReactNode } from "react";

type IconProps = {
  children?: ReactNode;
};

export default function Icon({ children }: IconProps) {
  return (
    <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center *:text-white *:w-6 *:h-6">
      {children}
    </div>
  );
}
