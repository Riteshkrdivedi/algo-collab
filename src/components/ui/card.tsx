import * as React from "react";

type BaseProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Card = React.forwardRef<HTMLDivElement, BaseProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={
          "rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm " +
          (className ?? "")
        }
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardContent = React.forwardRef<HTMLDivElement, BaseProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={("p-6 " + (className ?? "")).trim()} {...props}>
        {children}
      </div>
    );
  }
);
CardContent.displayName = "CardContent";
