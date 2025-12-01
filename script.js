export default async function handler(req, res) {
  const { city, lat, lon } = req.query;

  let query = "";

  if (lat && lon) {
    query = `${lat},${lon}`;
  } else if (city) {
    query = city;
  } else {
    return res.status(400).json({ error: "City OR lat/lon is required." });
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}&q=${query}&aqi=no`
    );

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
