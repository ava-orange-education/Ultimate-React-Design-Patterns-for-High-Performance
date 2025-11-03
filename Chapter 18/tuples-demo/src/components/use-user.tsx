import { useState, useEffect } from "react";

export type Data<T> = ["fetching", undefined] | ["success", T] | ["error", Error];

export const useUser = <T,>(url: string): Data<T> => {
  const [data, setData] = useState<Data<T>>(["fetching", undefined]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(["success", data]))
      .catch((error) => setData(["error", error]));
  }, [url]);

  return data;
};
