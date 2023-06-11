import { useState } from "react";

export default function useWeatherProvider() {
  const [isCelsius, setIsCelsius] = useState(true);

  return {
    isCelsius,
    setIsCelsius,
  };
}
