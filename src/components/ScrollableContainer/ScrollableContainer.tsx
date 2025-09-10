import React, { useRef, useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { ChevronLeft, ChevronRight, MoreVertical } from "@/assets";

interface ScrollableContainerProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  scrollAmount?: number;
}

export default function ScrollableContainer({
  children,
  className = "",
  scrollAmount = 1230,
  title,
}: ScrollableContainerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<"row" | "grid">("row");
  const scrollLeft = () => {
    if (scrollContainerRef.current && view === "row") {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && view === "row") {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Header */}
      <div className="flex flex-row justify-between items-center mb-4 pb-4 border-b border-border relative">
        <h2 className="text-lg px-4">{title}</h2>
        {/* Scroll buttons only in row mode */}
        <div className="flex flex-row ">
          {view === "row" && (
            <div className="flex flex-row ">
              <button
                onClick={scrollLeft}
                className="bg-transparent hover:bg-card text-text-primary rounded-3xl p-2 transition-colors duration-200"
                aria-label="Scroll left"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={scrollRight}
                className="bg-transparent hover:bg-card text-text-primary rounded-3xl p-2 transition-colors duration-200"
                aria-label="Scroll right"
              >
                <ChevronRight />
              </button>
            </div>
          )}

          {/* Dropdown Menu */}
          <DropdownMenu
            trigger={
              <button
                className="p-2 rounded-full focus:bg-[#0e0f1a] text-text-primary"
                aria-label="Menu"
              >
                <MoreVertical />
              </button>
            }
            items={[
              {
                label: `Switch layout to ${view === "row" ? "Grid" : "Scroll"}`,
                onClick: () => setView(view === "row" ? "grid" : "row"),
              },
            ]}
          />
        </div>
      </div>

      {/* Content */}
      {view === "row" ? (
        <div ref={scrollContainerRef} className="overflow-x-scroll scrollbar">
          <div className="inline-flex gap-4 pb-4 pt-4">{children}</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4 pt-4">
          {children}
        </div>
      )}
    </div>
  );
}
