import { getTokenData } from "@/helper/getTokenData";
import { NextRequest, NextResponse } from "next/server";

export  async function GET(request: NextRequest) {
    try {
        const uid = await getTokenData(request);
        if (uid) {
            return NextResponse.json({ success: true }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }
    } catch (error: any) {
        console.error("Error in GET handler:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
