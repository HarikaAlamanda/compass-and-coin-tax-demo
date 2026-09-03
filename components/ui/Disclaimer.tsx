import { ReactNode } from "react";

type DisclaimerProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Disclaimer({
  title = "Disclaimer",
  children,
  className = "",
}: DisclaimerProps) {
  return (
    <div
      className={`rounded-lg border border-border-color bg-surface px-4 py-3 text-sm leading-6 text-muted-text ${className}`}
    >
      <p className="mb-1 font-semibold text-foreground">{title}</p>
      <p>{children}</p>
    </div>
  );
}
