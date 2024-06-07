import { NextRequest, NextResponse } from "next/server";
import { getTokenData } from "@/helper/getTokenData"; // Ensure this is the correct path
import { db } from '@/dbConfig/config';
import { getDoc, doc } from "firebase/firestore";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

export async function GET(request: NextRequest) {
    try {
        // Extract user ID from the request
        const userId = await getTokenData(request);

        if (!userId) {
            return NextResponse.json({ error: 'User not logged in' }, { status: 401 });
        }

        // Reference to the user document
        const docRef = doc(db, "users", userId);

        // Get the document snapshot
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // Return the document data
            return NextResponse.json({ data: docSnap.get("recommendations") });
        } else {
            // User document does not exist, create a new one
            const response = await axios.post(`http://127.0.0.1:5000/create_user`, {
                userId: userId,
                key: process.env.FRONTEND_KEY
            });

            if (response.status === 201) {
                // Fetch the newly created document
                const newDocSnap = await getDoc(docRef);
                if (newDocSnap.exists()) {
                    return NextResponse.json({ data: newDocSnap.data() });
                } else {
                    throw new Error("Failed to fetch the newly created user document");
                }
            } else {
                throw new Error("Failed to create new user document via external API");
            }
        }

    } catch (error: any) {
        console.error('Error:', error);
        // Return an error response
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
