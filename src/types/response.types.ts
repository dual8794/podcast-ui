export interface ItunesResult {
    id: number;
    kind?: string;
    artistId?: number;
    collectionId?: number;
    trackId?: number;
    artistName?: string;
    collectionName?: string;
    releaseDate?: string;
    trackTimeMillis?: number;
    artworkUrl600?: string;
  }

  export interface ItunesEpisodeResult extends ItunesResult {
    shortDescription: string;
    trackName?: string;

  }
  
  export interface ItunesSearchResponse {
    podcasts: ItunesResult[];
    episodes: ItunesEpisodeResult[];
    error?: string;
  }