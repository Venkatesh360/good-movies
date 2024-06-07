import { NextRequest, NextResponse } from "next/server";
import { getTokenData } from "@/helper/getTokenData";
import axios from "axios";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/dbConfig/config";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { movieId } = reqBody;
        const apikey = process.env.API_KEY;
        const userId = await getTokenData(request);

        if (!movieId) {
            return NextResponse.json({ error: 'movieId is required' }, { status: 400 });
        }

        if (!userId) {
            return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
        }

        // Fetch movie data from external API
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}`);
        
        const movieData = {
            id: response.data.id,
            title: response.data.original_title,
            poster_path: response.data.poster_path,
            tagline: response.data.tagline,
            genres: response.data.genres
        };

        // Reference to the user's document in Firestore
        const docRef = doc(db, "users", userId);

        // Get the document snapshot
        const docSnap = await getDoc(docRef);

        // Check if the document exists
        if (docSnap.exists()) {
            const watchlist = docSnap.get("watchlist") || [];

            // Check if the movie is already in the watchlist
            const movieExists = watchlist.some((movie: any) => movie.id === movieData.id);

            if (movieExists) {
                return NextResponse.json({ message: "Movie is already in the watchlist" }, { status: 409 });
            }

            // Add the new movie data to the watchlist
            const updatedWatchlist = [...watchlist, movieData];

            // Update the Firestore document with the new watchlist
            await updateDoc(docRef, { watchlist: updatedWatchlist });

            return NextResponse.json({ message: "Movie added to watchlist", watchlist: updatedWatchlist }, { status: 200 });
        } else {
            return NextResponse.json({ message: "User does not exist" }, { status: 404 });
        }
    } catch (error: any) {
        console.error('Error:', error);

        if (error.response) {
            // Server responded with a status other than 200 range
            return NextResponse.json({ error: error.response.data.error || 'An error occurred' }, { status: error.response.status });
        } else if (error.request) {
            // Request was made but no response received
            return NextResponse.json({ error: 'No response from server' }, { status: 500 });
        } else {
            // Something happened in setting up the request that triggered an Error
            return NextResponse.json({ error: error.message || 'An unknown error occurred' }, { status: 500 });
        }
    }
}
