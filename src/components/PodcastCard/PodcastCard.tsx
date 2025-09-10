import Image from "next/image";

interface PodcastCardProps {
  title: string;
  author: string;
  image: string;
  accentColor?: string;
}

export default function PodcastCard({
  title,
  author,
  image,
  accentColor = "#E84C88",
}: PodcastCardProps) {
  return (
    <div className="flex-shrink-0 flex flex-col px-5">
      <div className="bg-card aspect-square w-48 h-48 sm:w-58 sm:h-58 rounded-sm mb-3">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="object-cover rounded-sm"
        />
      </div>
      <h3 className="text-sm text-white ">{title}</h3>
      <p className="text-xs mt-1" style={{ color: accentColor }}>
        {author}
      </p>
    </div>
  );
}
