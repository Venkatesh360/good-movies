"use client";

import React, { useState } from 'react';
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import MovieGenres from './MovieGenres';
import { useRouter } from 'next/navigation';
import "./CSS/Card.css";
import axios from 'axios';

const Card = ({ item }: any) => {
  const router = useRouter();

  const imageUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : '/path/to/default/image.png'; // Provide a default image path

  const title = item.original_title ? item.original_title : item.name;
  const Movies:any = MovieGenres ;
  const genreString = item.genre_ids.map((genre: number) => Movies[genre]).join(" \\ ");

  //src\app\api\recommendation\addToWatchlist\route.ts


  const AddToWatchlist = async () => {
    try {
      const response = await axios.post("/api/watchlist/addToWatchlist", {
        movieId: item.id
      });

      if (response.status === 200) {
        console.log("Movie added to watchlist successfully");
        // Optionally, provide user feedback or update the UI
      } else {
        console.error("Failed to add movie to watchlist");
        // Optionally, provide user feedback or update the UI
      }
    } catch (error: any) {
      console.error("An error occurred while adding the movie to the watchlist", error);
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Error response data:", error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error message:", error.message);
      }
      // Optionally, provide user feedback or update the UI
    }
  };

  return (
    <div className="flex h-full align-middle justify-center">
      <div className="container-div" tabIndex={0}>
        <div className="card-div">
          <div className="front-div">
            <img src={imageUrl} alt="movie" className="page_poster border-2" />
          </div>
          <div className="back-div p-4">
            <h1 className="text-lg font-bold">{title}</h1>
            <span className="genre mb-[10px]">{genreString}</span>
            <div className="flex mb-2">
              <h4 className="flex justify-start">Summary</h4>
              <div className="flex flex-grow"></div>
              <span className="flex justify-end">
                <ThumbsUpDownIcon className="p-[4px]" />
                <p className="font-semibold text-[12px] items-center text-white content-center pl-1">
                  {item.vote_average}
                </p>
              </span>
            </div>
            <p className="description">{item.overview}</p>

            <div className="flex flex-col gap-2 items-center justify-center mt-4">
              <span
                className="flex items-center justify-center w-[175px] text-sm bg-transparent border-2 rounded-[5px]  px-4 py-1 text-md font-semibold text-white hover:bg-white hover:text-gray-800 tranform duration-300 cursor-pointer"
                onClick={AddToWatchlist}
              >
                Add to Watchlist
              </span>
              <span
                className="flex  items-center justify-center w-[175px] text-sm  bg-transparent border-2 rounded-[5px]  px-4 py-1 text-md font-semibold text-white hover:bg-white hover:text-gray-800 duration-300 cursor-pointer"
                onClick={() => router.push(`/Trailer/${item.id}`)}
              >
                Watch Trailer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
