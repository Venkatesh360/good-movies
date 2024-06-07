import { NextRequest, NextResponse } from "next/server";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "@/dbConfig/config";
import axios from "axios";

export async function POST(request: NextRequest) {
    try {
      const reqBody = await request.json();
      const { email, password } = reqBody;
  
      const auth = getAuth(app); // Get the Auth instance (using the initialized app)
  
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; 
  
      // Check if user was created successfully
      if (user) {
        // User created successfully
        const response = await axios.post(`http://127.0.0.1:5000/create_user/${user.uid}`);

        return NextResponse.json({ message: "User created successfully" });
      } else {
        // Something went wrong - user not created
        return NextResponse.json({ error: "User creation failed" });
      }
  
    } catch (error: any) {
      // Handle specific error codes
      if (error.code === 'auth/email-already-in-use') {
        return NextResponse.json({ error: 'Email address already exists.' });
      } else if (error.code === 'auth/weak-password') {
        return NextResponse.json({ error: 'Password is too weak.' });
      } else {
        // Log error
        console.error("Error creating user:", error);
        return NextResponse.json({ error: error.message || "Something went wrong" });
      }
    }
  }