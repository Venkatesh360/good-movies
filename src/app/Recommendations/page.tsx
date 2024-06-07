"use client";

import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import ClockLoader from "react-spinners/ClockLoader";
import RecoCard from "../components/RecoCard";


function Recommendationpage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWatchlistData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("/api/recommendation/getReco");
                if (response && response.data && response.data.data) {
                    setData(response.data.data);
                } else {
                    console.log("Failed to fetch watchlist data");
                }
            } catch (error: any) {
                console.error("Error fetching watchlist data:", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWatchlistData();
    }, []);

    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="flex items-center justify-center">
            <h1 className="border-2 p-2 rounded-xl text-[40px] mt-5  text-white font-extrabold ">
                Recommendations
            </h1>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-[3vh] items-center justify-center content-center align-middle">
                {loading ? (

                    <div className="flex h-[74vh] w-full items-center justify-center">
                        <p><ClockLoader color="white" size={"75px"} /></p>
                    </div>
                ) : (
                    data.map((item) => <RecoCard item={item} key={item.id} />)
                )}
            </div>
        </div>
    );
}

export default Recommendationpage;
