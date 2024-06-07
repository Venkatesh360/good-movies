import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { message: 'API key is not set in environment variables.' },
            { status: 500 }
        );
    }

    const { searchParams } = new URL(request.url);
    const movieId = searchParams.get('movieId');

    if (!movieId) {
        return NextResponse.json(
            { message: 'movieId query parameter is required.' },
            { status: 400 }
        );
    }

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            params: {
                api_key: apiKey
            }
        });

        return NextResponse.json(
            { data: response.data },
            { status: 200 }
        );
    } catch (error: any) {
        // Handle errors from the Axios request
        const errorMessage = error.response ? error.response.data : error.message;
        return NextResponse.json(
            { message: `Error fetching data: ${errorMessage}` },
            { status: 500 }
        );
    }
}

