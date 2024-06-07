"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';
import ClockLoader from "react-spinners/ClockLoader";
import HomeIcon from '@mui/icons-material/Home';

function GetTrailer({ params }: any) {
    const [trailerUrl, setTrailerUrl] = useState('');
    const [details, setDetails] = useState<any>(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const movieId = params.movieId;

    const fetchTrailer = async () => {
        try {
            const response = await axios.post('/api/tmdb/trailer', {
                movieId: movieId,
            });

            if (response.status === 200) {
                setTrailerUrl(response.data.trailerUrl);
                setError('');
            } else {
                setError('Failed to fetch trailer.');
                setTrailerUrl('');
            }
        } catch (err) {
            setError('Error fetching trailer.');
            setTrailerUrl('');
        }
    };

    const fetchDetails = async () => {
        try {
            const response = await axios.get('/api/tmdb/movieData', {
                params: { movieId: movieId }
            });

            if (response.status === 200) {
                setDetails(response.data.data);
                setError('');
            } else {
                setError('Failed to fetch movie details.');
                setDetails(null);
            }
        } catch (err) {
            setError('Error fetching movie details.');
            setDetails(null);
        }
    };

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            await fetchDetails();
            await fetchTrailer();
            setLoading(false);
        };
        fetchData();
    }, [movieId]);

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100"><ClockLoader color="white" size={75} /> </div>;
    }

    if (error) {
        return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">{error}</div>;
    }

    return (
        <div className="flex flex-col p-4 bg-gray-900 text-gray-100 min-h-screen">
            <div className="fixed w-full mt-4 justify-end items-end flex px-8 lg:px-16 bg-transparent z-10 mr-4">
                <a className="p-1 hover:border-none hover:bg-white focus:ring-2 ring-blue-400 group border-2 rounded-xl " href="/"> <HomeIcon fontSize='medium' className='group-hover:text-gray-800 rounded-md' /> </a>
            </div>
            <div className="main_div rounded-md">
                <img
                    src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
                    alt={details.original_title}
                    className="trailer_poster max-h-[98vh] w-full object-cover rounded-t-md"
                />
                <div className="movie_details p-4 bg-gradient-to-t from-[#000000] to-[#4d485500] rounded-md">
                    <h1 className="text-xl md:text-[2rem] mb-2 md:mb-4 font-bold ">{details.original_title}</h1>
                    <span className="block mt-1 mb-4 text-sm font-light md:text-[1rem] ">{details.tagline}</span>
                    <h4 className="italic font-light text-sm md:text-[1rem]">{details.genres.map((genre: any) => genre.name).join(' / ')}</h4>
                    <p className="mt-4 font-light text-sm md:text-[1rem]">{details.overview}</p>
                    <p className="mt-4 text-sm md:text-[0.9rem] ">Release Date: {details.release_date}</p>
                    <p className="mt-2 text-sm  md:text-[0.9rem] ">Runtime: {details.runtime} minutes</p>
                </div>
                <div className="iframe relative w-full  pb-[56.25%] mt-8 z-10 ">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-md"
                        src={trailerUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default GetTrailer;
