export interface Movie {
  id: string | number;
  title: string;
  year: number;
  image: string;
  popular?: boolean;
  newRelease?: boolean;
  recommendation?: boolean;
  genre: string[];
  description: string;
  director?: string[];
  writers?: string[];
  cast?: string[];
  producers?: string[];
  cinematography?: string[];
  editing?: string[];
  costume?: string[];
}

export interface Kids {
  id: string | number;
  title: string;
  year: number;
  image: string;
  genre: string[];
  description: string;
  director?: string[];
  writers?: string[];
  cast?: string[];
  producers?: string[];
  cinematography?: string[];
  editing?: string[];
  costume?: string[];
}

export interface Podcast {
  id: string | number;
  title: string;
  year: number;
  image: string;
  genre?: string[];
  description: string;
  hosts: string[];
  producers: string[];
  language: string;
  platform: string[];
}

export type ContentType = Movie | Kids | Podcast;

export type ApiEndpoint = "movies" | "kids" | "podcasts" | string;

export interface FetchOptions {
  category?: string;
  genre?: string;
  limit?: number;
}

export interface UseApiData<T> {
  data: T[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export interface CategoryTitles {
  [key: string]: string;
}

export interface MoviesSliderProps {
  contentType?: string;
  category?: string;
  genre?: string | null;
  customTitle?: string | null;
  customData?: any[];
  onMovieClick?: (movieId: string | number, contentType?: string) => void;
}
