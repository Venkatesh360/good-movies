import { NextRequest, NextResponse } from "next/server";
import { getTokenData } from "@/helper/getTokenData";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/dbConfig/config";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { movieId } = reqBody;
        const userId = await getTokenData(request);

        if (!movieId) {
            return NextResponse.json({ error: 'movieId is required' }, { status: 400 });
        }

        if (!userId) {
            return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
        }

        // Reference to the user's document in Firestore
        const docRef = doc(db, "users", userId);

        // Get the document snapshot
        const docSnap = await getDoc(docRef);

        // Check if the document exists
        if (docSnap.exists()) {
            const watchlist = docSnap.get("watchlist") || [];

            // Check if the movie is in the watchlist
            const updatedWatchlist = watchlist.filter((movie: any) => movie.id !== movieId);

            if (watchlist.length === updatedWatchlist.length) {
                return NextResponse.json({ message: "Movie not found in watchlist" }, { status: 404 });
            }

            // Update the Firestore document with the new watchlist
            await updateDoc(docRef, { watchlist: updatedWatchlist });

            return NextResponse.json({ message: "Movie removed from watchlist", watchlist: updatedWatchlist }, { status: 200 });
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
