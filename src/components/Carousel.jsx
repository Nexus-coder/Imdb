import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ArrowPrev from "../MiniComponents/ArrowPrev";
import ArrowNext from "../MiniComponents/ArrowNext";
import MovieCardFetch from "../Fetch/MovieCardFetch";

export default function Carousel(autoslider = false, slidingTime = 2000) {
  
  const [curr, setCurr] = useState(0);
  let query = "dad";
  const res = useQuery(["Details", query], MovieCardFetch);

  let data = res.data ?? [];
  let image = data[curr]?.show?.image?.original ?? <p>NO</p>;
  console.log(curr);

  const next = () =>
    setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));
    
  const prev = () =>
    setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));

  useEffect(() => {
    if (!autoslider) return;
    const slide = setInterval(next, 2000);
    return () => {
      clearInterval(slide);
    };
  }, []);

  return (
    <div className="flex flex-row justify-center w-full p-4 gap-2">
      <div className="w-8/12 h-[550px] bg-black relative">
        <div className="absolute inset-0 flex items-center justify-between">
          <ArrowPrev />
          <ArrowNext />
        </div>
        <img className="object-fill w-full h-full" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-2 w-3/12">
        <h2 className="text-5xl font-bold ml-4">Up Next</h2>
        <div className="h-[450px] overflow-y-scroll">
          {data.map((elem, index) => (
            <div key={index} className="w-full h-[150px] mt-1 bg-slate-400">
              <img
                className="object-cover h-full"
                src={elem.show?.image?.original}
                alt=""
              />
            </div>
          ))}
        </div>
        <button className="w-full">Browse Movies</button>
      </div>
    </div>
  );
}
