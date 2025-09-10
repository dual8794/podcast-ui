import React from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
}

export default function Input({
  label,
  error,
  size,
  className,
  ...props
}: InputProps) {
  const baseClasses =
    "rounded-xl border transition-all duration-200 focus:outline-none";

  if (!size) {
    size = "md";
  }

  const sizeClasses = {
    sm: "px-2 py-[6px] text-sm",
    md: "px-3 py-3",
    lg: "px-4 py-4 text-lg",
  };

  const errorClasses = error ? "border-red-500 focus:outline-red-500" : "";

  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm font-medium text-text-secondary mb-1">
          {label}
        </label>
      )}
      <input
        className={`${baseClasses} ${sizeClasses[size]} ${errorClasses} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
