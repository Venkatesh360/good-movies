import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
    const apiKey = process.env.API_KEY;
    const body = await request.json();
    const { genId } = body;

    const baseUrl = `https://api.themoviedb.org/3/discover/movie`;
    const pages = [1, 2, 3, 4, 5]; // List of pages you want to request

    try {
        const allResults = [];

        for (const page of pages) {
            const response = await axios.get(baseUrl, {
                params: {
                    api_key: apiKey,
                    with_genres: genId,
                    page: page,
                },
            });

            allResults.push(...response.data.results);
        }

        return NextResponse.json({
            data: allResults,
        }, { status: 200 });

    } catch (error: any) {
        const errorMessage = error.response ? error.response.data : error.message;
        return NextResponse.json(
            { message: `Error fetching data: ${errorMessage}` },
            { status: 500 }
        );
    }
}
