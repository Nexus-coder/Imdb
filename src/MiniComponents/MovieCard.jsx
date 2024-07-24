import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";

//My imports
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import Button from "../ui/Button";

//The imports for the icons
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

//various styles used in tailwind and their meaning
let styles = {
  movieCard:
    "relative text-white bg-[#1B263B] w-[300px] h-[500px] sm:w-[255px] sm:h-[545px] p-1 m-1 slide",
  sideButtons: "absolute top-0 left-0 z-2",
  imageCover: "h-[320px] sm:h-[355px] hover:brightness-50",
  watchNow:
    "rounded-sm mx-auto my-2 w-60 h-12 bg-[#D9D9D9] text-[#415A77] text-2xl",
};

//The components
const MovieCard = forwardRef(function MovieCard(props, ref) {
  //The various props obtained

  const { name, score, image, id, style } = props;
  //Getting the hoo to change the global context
  //Why not set a function that can be called in from any where to change the context

  const [showModal, setShowModal] = useState(false);

  return (
    <figure ref={ref} style={style} className={styles.movieCard}>
      <div
        className={styles.sideButtons}
        onClick={() => {
          setHook([...hok, props]);
        }}
      >
        <MdOutlineBookmarkAdd size={50} />
      </div>

      <Link href={`details/${id}`}>
        <div className="overflow-hidden">
          <img
            className={styles.imageCover}
            src={image?.original ?? <p>No</p>}
            alt=""
          />
        </div>
      </Link>

      <figcaption>
        <div className="flex flex-col">
          <div className="flex items-center">
            <AiOutlineStar size={25} color="yellow" />
            <span className="text-xl ml-1">Rating :</span>
            <span className="text-xl">{(score * 10).toFixed(1)}</span>
          </div>
          <span className="text-3xl">{name}</span>
        </div>

        <Button text={"Watch Now"} className={styles.watchNow} />

        <div className="flex justify-around">
          <Button text={"Trailer"} size={"sm"} />
          <Button
            text={"Info"}
            size={"sm"}
            onClick={() => {
              setShowModal(true);
            }}
          />
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
