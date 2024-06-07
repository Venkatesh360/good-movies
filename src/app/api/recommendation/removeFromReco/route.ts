import { NextRequest, NextResponse } from "next/server";
import { getTokenData } from "@/helper/getTokenData";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { movieId } = reqBody;
        const userId = await getTokenData(request);

        if (!movieId) {
            return NextResponse.json({ error: 'movieId is required' }, { status: 400 });
        }

        if (!userId) {
            return NextResponse.json({ error: 'User not logged in' }, { status: 401 });
        }

        const response = await axios.put(`http://127.0.0.1:5000/remove_from_recommendation`, {
            uid: userId,
            movieId: movieId,
            key: process.env.FRONTEND_KEY
        });

        return NextResponse.json({ message: 'Recommendation updated successfully', data: response.data }, { status: 200 });

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
