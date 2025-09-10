import React, { useState, useRef, useEffect } from "react";

interface MenuItem {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  divider?: boolean;
  disabled?: boolean;
}

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: MenuItem[];
  className?: string;
  menuClassName?: string;
  align?: "left" | "right";
  width?: string;
}

export default function DropdownMenu({
  trigger,
  items,
  className = "",
  menuClassName = "",
  align = "right",
  width = "w-40",
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (item: MenuItem) => {
    if (!item.disabled) {
      item.onClick();
      setIsOpen(false);
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute top-8 ${
            align === "right" ? "right-2" : "left-2"
          } mt-2 ${width} bg-gradient-to-tr from-[#404080] to-[#6B4080] shadow-2xl rounded-md z-50 text-white ${menuClassName}`}
        >
          <ul className="flex flex-col px-3 py-1 text-sm">
            {items.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleItemClick(item)}
                  disabled={item.disabled}
                  className={` rounded-lg w-full p-2 text-left hover:bg-secondary/50 transition-colors flex items-center gap-2 ${
                    item.disabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                  {item.label}
                </button>
                {item.divider && (
                  <div className="w-full mr-[5px] ml-[5px] mb-[2px] mt-[2px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
