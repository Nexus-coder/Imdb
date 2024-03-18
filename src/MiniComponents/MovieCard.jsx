import { forwardRef, useRef, useState } from "react";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
// import { useNavigate } from "react-router-dom";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

const MovieCard = forwardRef(function MovieCard(props, ref) {
  const { name, score, image, id, style, hook, summary } = props;
  const [hok, setHook] = hook;
  const [showModal, setShowModal] = useState(false);

  return (
    <figure
      ref={ref}
      style={style}
      className="relative text-white bg-[#1B263B] w-[300px] h-[500px] sm:w-[255px] sm:h-[545px] p-1 m-1 slide"
    >
      <div
        className="absolute top-0 left-0 z-10"
        onClick={() => {
          setHook([...hok, props]);
        }}
      >
        <MdOutlineBookmarkAdd size={50} />
      </div>
      <a href={`details/${id}`}>
        <div className="overflow-hidden">
          <img
            className="h-[320px] sm:h-[355px] hover:brightness-50"
            src={image?.original ?? <p>No</p>}
            alt=""
          />
        </div>
      </a>
      <figcaption>
        <div className="flex flex-col">
          <div className="flex items-center">
            <AiOutlineStar size={25} color="yellow" />
            <span className="text-xl ml-1">Rating :</span>
            <span className="text-xl">{(score * 10).toFixed(1)}</span>
          </div>
          <span className="text-3xl">{name}</span>
        </div>
        <button className="rounded-sm mx-auto my-2 w-60 h-12 bg-[#D9D9D9] text-[#415A77] text-2xl">
          Watch Now
        </button>
        <div className="flex justify-around">
          <button className="w-20 rounded-md h-8">Trailer</button>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="h-8"
          >
            Info
          </button>
        </div>
      </figcaption>
      {showModal ? (
        <Modal>
          <ModalContent props={props} change={setShowModal} />
        </Modal>
      ) : null}
    </figure>
  );
});

export default MovieCard;
