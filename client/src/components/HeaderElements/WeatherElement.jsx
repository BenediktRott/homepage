import partlyCloudyIcon from "../../assets/icons/partly_cloudy_day.svg";
import { useWeather } from "../../hooks/useWeather";
import { getWeatherIcon } from "../../weatherIcons";

export function WeatherElement() {
  const weather = useWeather();

  if (weather.status === "loading") return <span aria-busy="true">…</span>;
  if (weather.status === "error") return null;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img
          src={getWeatherIcon(weather.icon)}
          alt={weather.icon.replaceAll("-", " ")}
          width={32}
          height={32}
        />
        <span>{Math.round(weather.temp)} °C</span>
      </div>
    </>
  );
}
