"use client";

import './CSS/WatchlistCard.css';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function WatchlistCard({ item }: any) {
    const router = useRouter();
    const [remove, setRemove] = useState(false);

    const watchTrailer = () => {
        router.push(`/Trailer/${item.id}`);
    };

    const handleRemove = async () => {
        setRemove(true);
        // Make an API call to remove the item from the watchlist on the server side
        try {
            const response = await axios.post("/api/watchlist/removeFromWatchlist", {
                movieId: item.id
            });
            // Optionally, you can handle the response here
            console.log(response.data);
        } catch (error) {
            console.error('Failed to remove movie from watchlist', error);
        }
    };

    if (remove) {
        return null;
    }

    const imageUrl =`https://image.tmdb.org/t/p/w500${item.poster_path}`;

    return (
        <div className='flex flex-col items-center  p-2 border-[2px]  rounded-md w-72 shadow-lg'>
            <div className="mb-2">
                <img src={imageUrl} alt={item.title} className='w-full rounded-md border-[2px] ' />
            </div>
            <div className="flex justify-between w-full mt-2">
                <button 
                    className='flex items-center text-md px-2 font-semibold justify-center  w-[45%] h-8 border-2 text-white rounded-md hover:bg-white hover:text-gray-800 transition duration-300' 
                    onClick={watchTrailer}
                >
                    Trailer
                </button>
                <button 
                    className='flex items-center justify-center w-[45%] h-8 border-2 text-white hover:text-gray-800 hover:bg-white  text-md  rounded-md transition duration-300'
                    onClick={handleRemove}
                >
                    <DeleteIcon fontSize="medium"/>
                </button>
            </div>
        </div>
    );
}

export default WatchlistCard;
