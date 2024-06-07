"use client";

import WatchlistCard from "../components/WatchlistCard";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import ClockLoader from "react-spinners/ClockLoader";


function WatchlistPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWatchlistData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("/api/watchlist/getWatchlist");
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
            <Navbar display={"absolute"} />
            <div className="flex justify-center items-center">
            <h1 className="border-2 p-4 rounded-xl text-[30px] text-white font-extrabold mt-[13vh]">
                 Watchlist
            </h1>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-[50px] items-center justify-center content-center align-middle">
                {loading ? (
                    <div className="flex h-[74vh] w-full items-center justify-center">
                          <p><ClockLoader color="white" size={"75px"} /></p>
                    </div>
                  
                ) : (
                    data.map((item) => <WatchlistCard item={item} key={item.id} />)
                )}
            </div>
        </div>
    );
}

export default WatchlistPage;
