import { useEffect, useState } from "react";
import axios from "../utils/axios";

const useAxios = (url, dependencies) => {
  // response, isLoading, error
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log("Dependencies", dependencies);

  useEffect(
    () => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await axios.get(url);
          setResponse(res);
        } catch (e) {
          setError(e);
        }
        setIsLoading(false);
      };
      fetchData();
    },
    dependencies ? [...dependencies] : []
  );

  return { response, error, isLoading };
};

export default useAxios;
