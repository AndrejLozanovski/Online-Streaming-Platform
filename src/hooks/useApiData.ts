import { useEffect, useState } from "react";
import { apiUrl } from "../global/api-urls";
import {
  ApiEndpoint,
  FetchOptions,
  Kids,
  Movie,
  Podcast,
  UseApiData,
} from "../interfaces/api-interface";

const BASE_URL = apiUrl;

export function useApiData<T = any>(
  endpoint: ApiEndpoint,
  options: FetchOptions = {}
): UseApiData<T> {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [refreshFlag, setRefreshFlag] = useState<number>(0);

  const { category, genre, limit } = options;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const rawData = await response.json();
        let filteredData = [...rawData];

        if (endpoint === "movies") {
          if (category === "popular") {
            filteredData = rawData.filter((item: any) => item.popular === true);
          } else if (category === "newRelease") {
            filteredData = rawData.filter((item: any) => item.newRelease === true);
          } else if (category === "recommendation") {
            filteredData = rawData.filter((item: any) => item.recommendation === true);
          } else if (category && category !== "all") {
            filteredData = rawData.filter((item: any) => item[category] === true);
          }
          if (genre) {
            filteredData = filteredData.filter(
              (item: any) => item.genre && item.genre.includes(genre)
            );
          } else if (
            category &&
            !["popular", "newRelease", "recommendation", "podcasts", "kids", "all"].includes(
              category
            )
          ) {
            filteredData = rawData.filter(
              (item: any) => item.genre && item.genre.includes(category)
            );
          }
        }

        if (limit && limit > 0) {
          filteredData = filteredData.slice(0, limit);
        }

        setData(filteredData as T[]);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An unknown error occurred"));
        console.error("Fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, category, genre, limit, refreshFlag]);

  const refetch = () => {
    setRefreshFlag((prev) => prev + 1);
  };

  return { data, isLoading, error, refetch };
}

export function useMovies(options: FetchOptions = {}): UseApiData<Movie> {
  return useApiData<Movie>("movies", options);
}

export function useKidsContent(options: FetchOptions = {}): UseApiData<Kids> {
  return useApiData<Kids>("kids", options);
}

export function usePodcasts(options: FetchOptions = {}): UseApiData<Podcast> {
  return useApiData<Podcast>("podcasts", options);
}
