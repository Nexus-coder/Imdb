import MovieCard from "../MiniComponents/MovieCard";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useRef, useState } from "react";

export default function Results({ heading, props }) {
  let style = {};

  //State for showing the movies
  const [showNext, setShowNext] = useState(true);
  const [showPrev, setShowPrev] = useState(true);

  const refs = props.reduce((acc, value) => {
    acc[value.show.id] = useRef();
    return acc;
  }, {});

  const count = useRef(0);

  let refer = [];

  for (let i = 0; i < props.length; i++) {
    refer.push({ i: props[i].show.id });
  }

  function next() {
    if (count.current >= 0 && count.current <= 5) {
      count.current = count.current + 1;
      setShowPrev(true);
    } else {
      setShowNext(false);
    }
    console.log(count.current);
  }

  function prev() {
    if (count.current <= 0) {
      setShowPrev(false);
    } else if (count.current > 0 && count.current <= 6) {
      count.current = count.current - 1;
      setShowNext(true);
    }
    console.log(count.current);
  }

  const handleClick = (id) => {
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };

  return (
    <div className="relative w-11/12 mx-auto slide">
      <h1 className="text-6xl font-bold text-white">{heading}</h1>
      <div className="relative flex overflow-x-scroll">
        {props.map((elem, index) => {
          return (
            <MovieCard
              ref={refs[elem.show.id]}
              id={elem.show.id}
              description={elem.show.summary}
              image={elem.show.image}
              score={elem.score}
              name={elem.show.name}
              key={index}
            />
          );
        })}
      </div>

      {showPrev && (
        <div
          className="absolute top-2/4 -left-[70px] h-[80px] w-[80px] border-4 flex items-center justify-center border-orange-600  rounded-full"
          onClick={() => {
            handleClick(refer[count.current].i);
            prev();
          }}
        >
          <MdOutlineNavigateBefore size={110} color="white" />
        </div>
      )}

      {showNext && (
        <div
          className="absolute top-2/4 -right-[70px] h-[80px] w-[80px] border-4 flex items-center justify-center border-orange-600  rounded-full"
          onClick={() => {
            next();
            handleClick(refer[count.current].i);
          }}
        >
          <MdOutlineNavigateNext size={110} color="white" />
        </div>
      )}
    </div>
  );
}
