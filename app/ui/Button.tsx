import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "primary" | "secondary";
  hero?: boolean;
}

export default function Button({
  children,
  hero,
  onClick,
  type = "primary",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `
    font-bold text-sm transition-all duration-500
    py-2 px-4 rounded-full flex items-center gap-2 hover:opacity-80
    
    `,
        type === "primary" && "bg-secondary text-primary ",
        type === "secondary" && "bg-accent text-primary",
        hero && "hover:rounded-full cursor-pointer",
      )}
    >
      {children}
    </button>
  );
}
