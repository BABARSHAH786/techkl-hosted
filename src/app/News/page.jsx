'use client'
import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // If using React Router

export default function NewsPage() {
  const initialNews = [
    { category: "Cricket", title: "Pakistan Wins Thrilling Match Pk Vs SA", content: "Rizwan ang Agha Salman hits a century! Highest chase Pakistan 352 world record" },
    { category: "Politics", title: "New Policy Announced", content: "Details of the new economic plan..." },
    { category: "Weather", title: "Heatwave Expected in May 2025", content: "Stay hydrated and avoid sun exposure." },
    { category: "Cricket", title: "India vs. England Series Preview", content: "Who will win? India win series 5 unique record" },
    { category: "Politics", title: "Inflation leaped 3% in January. Here's what it means for Fed rate cuts", content: "Inflation picked up for a fourth straight month in January amid another rise in in food and energy costs, possibly setting the stage for a year of halting progress in the battle to slow consumer price increases as President Donald Trump rolls out myriad import tariffs An underlying inflation measure also accelerated. Some economists said the larger-than-expected price surge takes additional Federal Reserve interest rate cuts off the table until at least year's end. Others said the figures may not be as alarming as they appear because of measurement issues the government often faces early in the year." },

    { category: "Weather", title: "Cold or Snow", content: " February 2025 is shaping up to be a cold and snowy month.  Expect below-average temperatures and increased precipitation, particularly in the form of snow in many regions.  Prepare for winter conditions and potential disruptions due to heavy snowfall. February 2025 is predicted to be a month of fluctuating temperatures.  Expect mild days interspersed with cooler spells.  Rainfall is likely to be average, with occasional heavier showers possible.  Snowfall will be limited to higher elevations.  Overall, a typical February with the usual mix of winter weather." },
    { category: "Technology", title: "New iPhone Released", content: "Apple's latest flagship device..." },
    { category: "Business", title: "Stock Market Update", content: "Dow Jones reaches record high..." },
  ];

  const [news, setNews] = useState(initialNews); // Initialize with hardcoded data

  const getNewsByCategory = (category) => {
    return initialNews.filter((item) => item.category === category); // Filter from initial data
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 min-h-screen text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-extrabold text-4xl mb-4">Daily News</h2>
        <hr className="border-gray-400 my-4" />

        {/* News Categories */}
        <div className="flex justify-around mb-6">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => setNews(initialNews)}>All News</button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => setNews(getNewsByCategory("Cricket"))}>Cricket</button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => setNews(getNewsByCategory("Politics"))}>Politics</button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => setNews(getNewsByCategory("Weather"))}>Weather</button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => setNews(getNewsByCategory("Technology"))}>Technology</button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => setNews(getNewsByCategory("Business"))}>Business</button>
        </div>

        {/* News Display */}
        {news.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 mb-4 shadow-lg">
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p>{item.content}</p>
            <p className="text-gray-400 mt-2">Category: {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}