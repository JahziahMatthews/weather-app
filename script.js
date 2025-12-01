async function getWeather(city) {
  const res = await fetch(`/api/weather?city=${city}`);
  const data = await res.json();
  return data;
}

document.getElementById("submit").addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  const weather = await getWeather(city);

  console.log(weather);

  document.getElementById("output").innerText =
    `${weather.location.name}, ${weather.location.country}  
     ${weather.current.temp_c}°C  
     ${weather.current.condition.text}`;
});
