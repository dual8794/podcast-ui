import React from "react";

interface PlayButtonProps {
  width?: number;
  height?: number;
  className?: string;
}

export const PlayButton: React.FC<PlayButtonProps> = ({
  width = 16,
  height = 16,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
};
