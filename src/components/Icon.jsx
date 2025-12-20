import "../App.css";

export default function Icon({ children }) {
  return (
    <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center *:text-white *:w-6 *:h-6">
      {children}
    </div>
  );
}
