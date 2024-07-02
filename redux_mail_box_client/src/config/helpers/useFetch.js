import { useEffect, useState } from "react";

const useFetch = (url, interval = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataFromServer = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went in Fetch Data From Server");
      }
      const result = await response.json();
      const loadServerData = [];
      for (const key in result) {
        loadServerData.push({
          id: key,
          ...result[key],
        });
      }
      setData(loadServerData);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      fetchDataFromServer();
    }
    let intervalId;
    if (interval) {
      intervalId = setInterval(() => {
        if (isMount) {
          fetchDataFromServer();
        }
      }, interval);
    }
    return () => {
      isMount = false;
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [url, interval]);

  return { data, isLoading };
};

export default useFetch;
