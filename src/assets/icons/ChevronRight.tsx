import React from "react";

interface ChevronRightProps {
  width?: number;
  height?: number;
  className?: string;
}

export const ChevronRight: React.FC<ChevronRightProps> = ({
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};
