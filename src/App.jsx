import React, { useState } from "react";

const api = {
    key:"fa8b4180a2a61baf502a032bba257f9c",
    base:"https://api.openweathermap.org/data/2.5/weather"
}

function App() {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const searchPressed = () => {
        fetch(`${api.base}?q=${search}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then((result) => {
            setWeather(result)
        })
    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Weather App</h1>
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter city name"
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
          onChange={(e)=> setSearch(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={searchPressed}
        >
          Get Weather
        </button>
      </div>
      <div className="p-2 shadow-md bg-white rounded rouded w-[300px] capitalize font-bold">
        <p className="text-center text-2xl text-blue-900 uppercase mb-2">{weather.name} CIty</p>
        <p className="text-center text-lg text-blue-800 uppercase mb-2">{weather.main?.temp}<sup>o</sup>C</p>
        <p className="text-center text-xl text-blue-700 capitalize mb-2">{weather.weather?.[0]?.description}</p>
      </div>
    </div>
  );
}

export default App;
