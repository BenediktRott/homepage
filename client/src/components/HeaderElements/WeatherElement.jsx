import partlyCloudyIcon from "../../assets/icons/partly_cloudy_day.svg";

export function WeatherElement() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <img src={partlyCloudyIcon} alt="" />
        <span>14°C</span>
      </div>
    </>
  );
}
