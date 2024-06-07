"use client";

import React, { useState } from 'react';
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import { useRouter } from 'next/navigation';
import "./CSS/RecoCard.css";
import axios from 'axios';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';



const RecoCard = ({ item }: any) => {
  const router = useRouter();
  const [watched, setWatched] = useState(false);

  
const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`

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

  const handleLike = async () => {
    try {
      const response = await axios.post("/api/recommendation/addToReco", { movieId:item.id });
      if (response.status === 200) {
        console.log("Recommendations Updated successfully");
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log("error:", error);
    }
  } 

  
  const handleDislike = async () => {
    try {
      const response = await axios.post("/api/recommendation/removeFromReco", { movieId:item.id });
      if (response.status === 200) {
        console.log("Recommendations Updated successfully");
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log("error:", error);
    }
  } 


  return (
    <div className="flex h-full align-middle justify-center">
      <div className="container-div" tabIndex={0}>
        <div className="card-div">
          <div className="front-div">
            <img src={imageUrl} alt="movie" className="page_poster border-2" />
          </div>
          <div className="back-div p-4">
            <h1 className="text-md font-bold  ">{item.title}</h1>
            <span className="genre mb-[10px]">{item.genres}</span>
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
            <p className="description pb-[-25px]">{item.overview}</p>

            <div className="flex flex-col gap-4 items-center justify-center  mt-2 ">

            {watched ? (
              <div className="flex w-full justify-evenly items-center pt-2 mt-[-5px] ">
                <span
                  className="group w-10  rounded-md flex justify-center p-[2.5px] border-2 hover:bg-white transition-colors duration-300 cursor-pointer"
                  onClick={handleLike}
                >
                  <ThumbUpOffAltIcon className=" text-white group-hover:text-gray-800 transition-colors duration-300" />
                </span>
                <div className="flex w-10 "></div>
                <span
                  className="group w-10 rounded-md  flex justify-center p-[2.5px] border-2 hover:bg-white transition-colors duration-300 cursor-pointer"
                  onClick={handleDislike}
                >
                  <ThumbDownOffAltIcon className="text-white group-hover:text-gray-800 transition-colors duration-300" />
                </span>
              </div>
            ) : (
              <div className="flex justify-center mt-4">
                <button
                  className="bg-transparent border-2 text-white rounded-[5px] w-[175px] px-4 py-1 text-sm font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-300"
                  onClick={()=> (setWatched(!watched))}
                >
                  Watched already?
                </button>
              </div>
            )}
            
              <button
                className="flex items-center justify-center w-[175px]  px-4 py-1  bg-transparent border-2 rounded-[5px]   text-sm font-semibold text-white hover:bg-white hover:text-gray-800 transition-colors duration-300 cursor-pointer mt-[-5px] mb-[-5px]"
                onClick={AddToWatchlist}
              >
                Add to Watchlist
              </button>
              <span
                className="flex  items-center justify-center w-[175px]   bg-transparent border-2 rounded-[5px]  px-4 py-1 text-sm font-semibold text-white hover:bg-white hover:text-gray-800 transition-colors duration-300 cursor-pointer"
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

export default RecoCard;
