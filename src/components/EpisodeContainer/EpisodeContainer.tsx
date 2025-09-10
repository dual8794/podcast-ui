import React, { useRef, useState } from "react";
import EpisodeListItem from "../EpisodeListItem/EpisodeListItem";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { getAuthorColor } from "@/utils/authorColors";
import { ChevronLeft, ChevronRight, MoreVertical } from "@/assets";

interface Episode {
  id: number;
  artistId?: number;
  trackName?: string;
  collectionName?: string;
  artworkUrl600?: string;
  releaseDate?: string;
  trackTimeMillis?: number;
  shortDescription?: string;
}

interface EpisodeContainerProps {
  episodes: Episode[];
  title: string;
  className?: string;
}

type ViewMode = "grid" | "list" | "scroll" | "compact";

export default function EpisodeContainer({
  episodes,
  title,
  className = "",
}: EpisodeContainerProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`${className}`}>
      {/* Header */}
      <div className="flex flex-row justify-between items-center mb-4 px-5 pb-4 border-b border-border relative">
        <h2 className="text-lg">{title}</h2>

        <div className="flex flex-row">
          {/* Scroll buttons only in scroll mode */}
          {viewMode === "scroll" && (
            <div className="flex flex-row gap-2 mr-4">
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
            width="w-50"
            trigger={
              <button
                className="py-2 rounded-full focus:bg-[#0e0f1a] text-text-primary"
                aria-label="View options"
              >
                <MoreVertical />
              </button>
            }
            items={[
              ...(viewMode !== "scroll"
                ? [
                    {
                      label: "Switch layout to Scroll",
                      onClick: () => setViewMode("scroll"),
                    },
                  ]
                : []),
              ...(viewMode !== "compact"
                ? [
                    {
                      label: "Switch layout to Compact",
                      onClick: () => setViewMode("compact"),
                    },
                  ]
                : []),
              ...(viewMode !== "list"
                ? [
                    {
                      label: "Switch layout to List",
                      onClick: () => setViewMode("list"),
                    },
                  ]
                : []),
              ...(viewMode !== "grid"
                ? [
                    {
                      label: "Switch layout to Grid",
                      onClick: () => setViewMode("grid"),
                    },
                  ]
                : []),
            ]}
          />
        </div>
      </div>

      {/* Content */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5 ">
          {episodes.map((episode, index) => (
            <EpisodeListItem
              key={episode.artistId || `episode-${index}`}
              title={episode.trackName}
              podcast={episode.collectionName}
              image={episode.artworkUrl600 || ""}
              compact={false}
              podcastColor={getAuthorColor(episode.collectionName || "")}
              date={episode.releaseDate}
              time={episode.trackTimeMillis?.toString()}
            />
          ))}
        </div>
      )}

      {viewMode === "compact" && (
        <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {episodes.map((episode, index) => (
            <EpisodeListItem
              key={episode.artistId || `episode-${index}`}
              title={episode.trackName}
              podcast={episode.collectionName}
              image={episode.artworkUrl600 || ""}
              compact={true}
              podcastColor={getAuthorColor(episode.collectionName || "")}
            />
          ))}
        </div>
      )}

      {viewMode === "scroll" && (
        <div className="px-5">
          <div ref={scrollContainerRef} className="overflow-x-auto scrollbar">
            <div className="flex flex-row gap-4 pb-4 ">
              {episodes.map((episode, index) => (
                <div
                  key={episode.artistId || `episode-${index}`}
                  className="w-72 sm:w-80 lg:w-100 flex-shrink-0"
                >
                  <EpisodeListItem
                    title={episode.trackName}
                    podcast={episode.collectionName}
                    image={episode.artworkUrl600 || ""}
                    compact={false}
                    podcastColor={getAuthorColor(episode.collectionName || "")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {viewMode === "list" && (
        <div className="flex flex-col px-5 gap-1">
          {episodes.map((episode, index) => (
            <EpisodeListItem
              key={episode.artistId || `episode-${index}`}
              title={episode.trackName}
              podcast={episode.collectionName}
              image={episode.artworkUrl600 || ""}
              list={true}
              date={episode.releaseDate}
              time={episode.trackTimeMillis?.toString()}
              description={episode.shortDescription}
              podcastColor={getAuthorColor(episode.collectionName || "")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
