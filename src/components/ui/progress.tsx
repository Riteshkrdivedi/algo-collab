import * as React from "react";

type ProgressProps = {
  value?: number; // 0-100
  className?: string;
};

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value = 0, className }, ref) => {
    const clamped = Math.max(0, Math.min(100, value));
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamped}
        className={(
          "relative h-3 w-full overflow-hidden rounded-full bg-gray-200 " +
          (className ?? "")
        ).trim()}
      >
        <div
          className="h-full w-full flex-1 bg-black transition-all"
          style={{ transform: `translateX(-${100 - clamped}%)` }}
        />
      </div>
    );
  }
);
Progress.displayName = "Progress";
