//if (process.env.NODE_ENV !== "production") process.loadEnvFile();

export async function getWeather(req, res) {
  res.redirect("/weather/munich");
}

export async function getWeatherLocation(req, res) {
  try {
    const { location } = req.params;

    if (!location) throw new Error(`Invalid location: ${location}`);

    const url = new URL(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/today`,
    );
    url.search = new URLSearchParams({
      unitGroup: "metric",
      include: "current",
      key: process.env.WEATHER_API_KEY,
      contentType: "json",
    });

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Weather API error: ${response.status}`);

    const data = await response.json();
    const current = data.currentConditions;

    res.set("Cache-Control", "public, max-age=900");
    res.json({ temp: current.temp, icon: current.icon });
  } catch (error) {
    next(error);
  }
}
