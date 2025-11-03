import { useState, useEffect } from "react";

type State = { status: "fetching" } | { status: "fetched" } | { status: "error"; error: Error }

export const useUser = (src: string) => {
  const [state, setState] = useState<State>({ status: "fetching" });

  useEffect(() => {
    setState({ status: "fetching" });
    let aborted = false;
    fetch(src)
      .then((data) => {
        if (aborted) return;
        setState({ status: "fetched" });
      })
      .catch((error) => {
        if (aborted) return;
        setState({ status: "error", error });
      });

    return () => {
      aborted = true;
    };
  }, [src]);

  return state;
};
