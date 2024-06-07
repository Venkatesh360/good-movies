import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const apiKey = process.env.API_KEY;
    const baseUrl = 'https://api.themoviedb.org/3/trending/movie/week';
    const pages = [1, 2, 3, 4, 5]; // List of pages you want to request

    try {
        // Create an array of promises for fetching each page
        const requests = pages.map(page => 
            axios.get(baseUrl, {
                params: {
                    api_key: apiKey,
                    page: page
                }
            })
        );

        // Wait for all requests to complete
        const responses = await Promise.all(requests);

        // Combine data from all responses
        const combinedData = responses.flatMap(response => response.data.results);

        // Return the combined data
        return NextResponse.json({
            data: combinedData
        }, { status: 200 });

    } catch (error: any) {
        // Handle errors from the Axios request
        const errorMessage = error.response ? error.response.data : error.message;
        return NextResponse.json(
            { message: `Error fetching data: ${errorMessage}` },
            { status: 500 }
        );
    }
}
