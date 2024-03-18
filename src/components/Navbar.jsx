import { useQuery } from "@tanstack/react-query";
import MovieOptionFetch from "../fetch/MovieOptionFetch";
import { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [movie, setMovie] = useState("");
  const res = useQuery(["movies", movie], MovieOptionFetch);
  const navigate = useNavigate();

  let data = res?.data ?? [];

  return (
    <div className="flex flex-row items-center justify-center px-1 gap-1 bg-slate-950 text text-white h-20 sm:bg-slate-100 sm:gap-2 sm:px-2 md:bg-amber-500 md:gap-3 md:px-3 lg:gap-4 lg:px-4">

      <button className="hidden sm:inline-block">Imdb</button>
      
      <button className="hidden sm:inline-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <span className="hidden sm:block">Menu</span>
      </button>
      <div id="search-box" className="relative w-full lg:w-8/12">
        <div className="flex flex-row items-center border-2  border-orange-500">
          <div className="flex items-center justify-center w-2/12 h-10 text-center border-r-2">
            ALL
          </div>
          <input
            className="px-4 text-xl w-full outline-none text-black h-10 focus:outline"
            type="search"
            name=""
            id=""
            value={movie}
            onChange={(e) => {
              setMovie(e.target.value);
            }}
          />
        </div>
        {data.length ? <NavbarLinks props={data} /> : null}
      </div>
      <button
        className="w-20 hidden sm:inline-block"
        onClick={() => navigate("/watchlist")}
      >
        WatchList
      </button>
      <button className="hidden sm:inline-block">Sign In</button>
    </div>
  );
}
