import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("max-w-7xl mx-auto px-3 lg:px-8", className)}>
      {children}
    </div>
  );
}
