import { useEffect, useState } from "react";
import {
  AccountantResponseType,
  AccountantType,
} from "../types/AccountantType";

const useFetch = (url?: string) => {
  const [data, setData] = useState<AccountantType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>();

  const fetcher = (url: string) => {
    setIsLoading(true);
    setError(null);
    fetch(url)
      .then((response) => response.json())
      .then((data: AccountantResponseType) => {
        setData(data.results);
      })
      .catch((error) => {
        setError(error);
        setData([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (url) {
      fetcher(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error, fetcher };
};

export default useFetch;
