import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
    const apiKey = process.env.API_KEY;
    const body = await request.json();
    const { movieId } = body;

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
        );

        const trailers = response.data.results;
        const trailer = trailers.find(
            (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
        );

        if (trailer) {
            return NextResponse.json({ trailerUrl:`https://www.youtube.com/embed/${trailer.key}` }, {status:200});
        } else {
            return NextResponse.json({ message: 'Trailer not found' }, { status: 404 });
        }
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data : error.message;
        return NextResponse.json(
            { message: `Error fetching data: ${errorMessage}` },
            { status: 500 }
        );
    }
}
