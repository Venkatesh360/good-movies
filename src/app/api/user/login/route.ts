import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, db } from "@/dbConfig/config";
import axios from "axios";
import { doc, getDoc } from "firebase/firestore";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const auth = getAuth(app);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        const response = await axios.post(`http://127.0.0.1:5000/create_user`,{
          uid:user.uid,
          key:process.env.FRONTEND_KEY
        });

        if (response.status === 201) {
          console.log("User profile created in the db");
        } else {
          console.error("Failed to create user profile in the db");
          return NextResponse.json({ error: "Failed to create user profile" }, { status: 500 });
        }
      }

      const JWT_SECRET = process.env.TOKEN_SECRET;
      if (!JWT_SECRET) {
        throw new Error("JWT secret is not defined");
      }
      
      const token = jwt.sign({ userId: user.uid, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

      const response = NextResponse.json({
        message: "Login Successful",
        success: true
      });

      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600,
        path: '/'
      });

      return response;
    } else {
      return NextResponse.json({ error: "Login failed" }, { status: 401 });
    }
  } catch (error: any) {
    let errorMessage = "Something went wrong";
    if (error.code === 'auth/wrong-password') {
      errorMessage = 'Incorrect password.';
    } else if (error.code === 'auth/user-not-found') {
      errorMessage = 'User not found.';
    }
    console.error("Error logging in:", error.message || error);
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
