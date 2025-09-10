import Image from "next/image";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { MoreVertical, PlayButton } from "@/assets";
import { formatEpisodeDateTime } from "@/utils/dateTimeFormatter";
import { memo } from "react";

interface EpisodeListItemProps {
  title?: string;
  image: string;
  podcast?: string;
  podcastColor?: string;
  compact?: boolean;
  date?: string;
  time?: string;
  list?: boolean;
  description?: string;
}

const EpisodeListItem = memo(function EpisodeListItem({
  title,
  image,
  podcast,
  podcastColor = "#E84C88",
  compact = false,
  list = false,
  date,
  time,
  description,
}: EpisodeListItemProps) {
  const formattedDateTime = formatEpisodeDateTime(date, time);
  const hasDateTime = date && time;

  // Memoized dropdown items with actual handlers
  const menuItems = [
    {
      label: "Add to My Queue",
      onClick: () => {},
      divider: true,
    },
    {
      label: "Go to episode",
      onClick: () => {},
    },
    {
      label: "Go to podcast",
      onClick: () => {},
      divider: true,
    },
    {
      label: "Download",
      onClick: () => {},
    },
  ];

  const renderImage = (
    width: number,
    height: number,
    className: string = ""
  ) => (
    <div className={`bg-secondary rounded mr-4 ${className}`}>
      <Image
        alt={title || "Episode artwork"}
        src={image}
        className="object-cover rounded"
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );

  const renderDropdownMenu = () => (
    <DropdownMenu
      width="w-[200px]"
      trigger={
        <button
          className="py-2 rounded-full focus:text-white text-[#50515d] hover:text-white transition-colors duration-200"
          aria-label="Episode menu"
        >
          <MoreVertical />
        </button>
      }
      items={menuItems}
    />
  );

  // Compact view
  if (compact) {
    return (
      <div className="flex items-center py-2 border-b border-secondary hover:bg-secondary/20 transition-colors duration-200">
        {renderImage(40, 40, "w-10 h-10")}
        <div className="flex flex-row justify-between w-full">
          <div className="flex-1 min-w-0">
            <p
              className="text-white text-sm font-medium truncate"
              title={title}
            >
              {title}
            </p>
            <p
              className="text-xs truncate"
              style={{ color: podcastColor }}
              title={podcast}
            >
              {podcast}
            </p>
          </div>
          {renderDropdownMenu()}
        </div>
      </div>
    );
  }

  // List view
  if (list) {
    return (
      <div className="flex flex-row border-b border-border py-3 hover:bg-secondary/10 transition-colors duration-200">
        {renderImage(110, 110, "w-28 h-26")}
        <div className="flex flex-row justify-between w-full py-2">
          <div className="flex flex-col justify-between flex-1 min-w-0">
            <div>
              <p
                className="text-white text-sm font-medium mb-1 line-clamp-2"
                title={title}
              >
                {title}
              </p>
              <p
                className="text-xs mb-2"
                style={{ color: podcastColor }}
                title={podcast}
              >
                {podcast}
              </p>
              {description && (
                <p
                  className="text-xs text-gray-400 line-clamp-2"
                  title={description}
                >
                  {description}
                </p>
              )}
            </div>
            {hasDateTime && (
              <p className="text-xs text-white mt-2">{formattedDateTime}</p>
            )}
          </div>
          <div className="flex flex-col justify-between py-2 items-center ml-4">
            <button
              onClick={() => {}}
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
              aria-label="Play episode"
            >
              <PlayButton
                width={12}
                height={12}
                className="text-[#50515d] hover:text-white"
              />
            </button>
            {renderDropdownMenu()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-row border-t w-72 md:w-20 lg:w-100 border-border rounded-md hover:bg-secondary/20 transition-all duration-200 cursor-pointer"
      style={{
        backgroundColor: `${podcastColor}10`,
      }}
    >
      {renderImage(140, 140)}
      <div className="flex flex-row justify-between w-full py-4">
        <div className="flex flex-col justify-between flex-1 min-w-0">
          <div>
            <p
              className="text-xs mb-1"
              style={{ color: podcastColor }}
              title={podcast}
            >
              {podcast}
            </p>
            <p
              className="text-white text-sm font-medium line-clamp-2"
              title={title}
            >
              {title}
            </p>
          </div>
          {hasDateTime && (
            <p className="text-xs text-white mt-2">{formattedDateTime}</p>
          )}
        </div>
        <div className="flex flex-col justify-center ml-2">
          {renderDropdownMenu()}
        </div>
      </div>
    </div>
  );
});

export default EpisodeListItem;
