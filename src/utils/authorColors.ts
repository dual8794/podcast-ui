import { randomColors } from "./randomeColors";

// Cache to ensure same author always gets same color
const authorColorCache = new Map<string, string>();

/**
 * Get a consistent color for an author based on their name
 * @param authorName - The name of the author/podcast creator
 * @returns A hex color string
 */
export function getAuthorColor(authorName: string): string {
  if (!authorName || authorName.trim() === "") {
    return randomColors[0]; // Default color for empty names
  }

  // Check if we already have a color for this author
  if (authorColorCache.has(authorName)) {
    return authorColorCache.get(authorName)!;
  }

  // Generate a hash from the author name to get consistent index
  let hash = 0;
  for (let i = 0; i < authorName.length; i++) {
    const char = authorName.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Use absolute value and modulo to get index within color array bounds
  const colorIndex = Math.abs(hash) % randomColors.length;
  const color = randomColors[colorIndex];

  // Cache the color for this author
  authorColorCache.set(authorName, color);

  return color;
}

/**
 * Get a random color (useful for fallback or testing)
 * @returns A random hex color string
 */
export function getRandomColor(): string {
  const randomIndex = Math.floor(Math.random() * randomColors.length);
  return randomColors[randomIndex];
}

