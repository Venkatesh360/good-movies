"use client";

import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import axios from 'axios';
import Navbar from './components/Navbar';
import Genre from './components/Genre';
import ClockLoader from 'react-spinners/ClockLoader';

interface DataItem {
  id: string;
}

function Home() {
  const [data, setData] = useState<DataItem[]>([]);
  const [genreId, setGenreId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading state to true before fetching data
        setError(null); // Reset error state before fetching new data
        let response;
        if (genreId) {
          response = await axios.post("/api/tmdb/genre", {
            genId: parseInt(genreId)
          });
        } else {
          response = await axios.get("/api/tmdb/trending");
        }
        setData(response.data.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false); // Set loading state to false after fetching data
      }
    };

    fetchData();
  }, [genreId]);

  const handleGenreChange = (selectedGenreId: string) => {
    setGenreId(selectedGenreId);
  };

  return (
    <div className="flex flex-col">
      <Navbar display={"fixed"} />
      <Genre onGenreChange={handleGenreChange} />
      {loading ? (
        <div className="flex h-[76vh] items-center justify-center">
          <ClockLoader color="white" size={75} />
        </div>
      ) : error ? (
        <div className="p-8 text-red-500">
          {error}
        </div>
      ) : (
        <div className="flex flex-grow items-center justify-center flex-wrap gap-8 pt-8">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
