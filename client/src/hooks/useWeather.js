import { useEffect } from "react";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL ?? "";

export function useWeather() {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    console.log(API_URL);

    (async () => {
      try {
        const response = await fetch(`${API_URL}/weather/munich`, {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const { temp, icon } = await response.json();
        setState({ status: "success", temp, icon });
      } catch (error) {
        if (error.name !== "AbortError") setState({ status: "error" });
      }
    })();

    return () => controller.abort();
  }, []);

  return state;
}
