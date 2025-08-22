import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white";

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-black text-white hover:bg-black/90 focus-visible:ring-black",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-100/80 focus-visible:ring-gray-300",
  outline:
    "border border-white/20 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white",
  ghost:
    "bg-transparent text-white hover:bg-white/10 focus-visible:ring-white/30",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const cls = [base, sizes[size], variants[variant], className]
      .filter(Boolean)
      .join(" ");
    return <button ref={ref} className={cls} {...props} />;
  }
);

Button.displayName = "Button";
