import { motion } from "framer-motion";

export default function Loader() {
  const circles = [
    { color: "#e86491", delay: 0 },
    { color: "#ba6fde", delay: 0.15 },
    { color: "#cf8163", delay: 0.3 },
    { color: "#4daee8", delay: 0.45 },
    { color: "#7b7bf0", delay: 0.6 },
    { color: "#e3bd71", delay: 0.75 },
  ];

  return (
    <div className=" bg-primary flex items-center justify-center h-80 w-340">
      <div className="relative h-20 w-20">
        {circles.map((c, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2"
            style={{
              width: "100%",
              height: "100%",
              borderColor: c.color,
            }}
            animate={{
              scale: [1 - i * 0.1, 1 - i * 0.1 + 0.15, 1 - i * 0.1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: c.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
