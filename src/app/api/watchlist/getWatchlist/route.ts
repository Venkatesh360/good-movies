import { db } from "@/dbConfig/config";
import { getTokenData } from "@/helper/getTokenData";
import { doc, getDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        // Get the user ID from the token
        const userId = await getTokenData(request);
        if (!userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        // Reference to the user's document in Firestore
        const docRef = doc(db, "users", userId);

        // Get the document snapshot
        const docSnap = await getDoc(docRef);

        // Check if the document exists
        if (docSnap.exists()) {
            return NextResponse.json({
                data: docSnap.get("watchlist")
            }, { status: 200 });
        } else {
            return NextResponse.json({ message: "User does not exist" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error fetching user watchlist:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
