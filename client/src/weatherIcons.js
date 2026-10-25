const modules = import.meta.glob("./assets/weather-icons/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const icons = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [
    path.split("/").pop().replace(".svg", ""),
    url,
  ]),
);

export const getWeatherIcon = (name) => icons[name] ?? icons["cloudy"];
