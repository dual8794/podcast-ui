import { API } from "./api";
import { ItunesSearchResponse } from "@/types/response.types";

class PodcastService {
  async getPodcasts(term: string): Promise<ItunesSearchResponse> {
    if (!term || term.trim().length === 0) {
      // Return error message when no search term
      return {
        podcasts: [],
        episodes: [],
        error: "Please enter a search term to find podcasts"
      };
    }

    try {
      const response = await API.get(`/itunes/search?term=${encodeURIComponent(term.trim())}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching podcasts:', error);
      // Return error message
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      return {
        podcasts: [],
        episodes: [],
        error: `Failed to fetch podcasts: ${errorMessage}`
      };
    }
  }
}

const podcastService = new PodcastService();
export default podcastService;