import { useState, useEffect } from 'react';

interface LoadingHandler {
  (state: boolean): void;
}

interface FetchState<T> {
  data: T | null;
  error: Error | null;
}

export const useFetch = <T>(url: string, loadingHandler: LoadingHandler) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
        loadingHandler(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        loadingHandler(false)
        setState({
          data: json,
          error: null,
        });
      } catch (error) {
        loadingHandler(false);
        setState({
          data: null,
          error: error instanceof Error ? error : new Error('An error occurred'),
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
};
