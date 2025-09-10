import React from "react";

interface ChevronLeftProps {
  width?: number;
  height?: number;
  className?: string;
}

export const ChevronLeft: React.FC<ChevronLeftProps> = ({
  width = 16,
  height = 16,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};
