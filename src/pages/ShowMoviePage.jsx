import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MovieFetchId from "../fetch/MovieFetchId";

export default function ShowMoviePage() {

  const { id } = useParams();
  const res = useQuery(["MovieID", id], MovieFetchId);
  const data = res?.data ?? [];

  // console.log(props);
  // const { score, show } = props;
  console.log(data);
  const { genres, image, name, summary } = data;
  return (
    <div className="w-10/12 mx-auto p-5 ">
      <section>
        <nav>
          <ul className="flex gap-3 text-2xl  font-bold">
            <li className="font-bold mr-auto">
              Episode Guide:<span className="ml-3">90</span>
            </li>
            <li>Cast and Crew</li>
            <li>User Review</li>
            <li>Trivia</li>
            <li>IMDBPro</li>
            <li>All Topics</li>
            <li>Share</li>
          </ul>
        </nav>
        <nav className="flex">
          <div>
            <span className="text-5xl">{name}</span>
            <div className="text-2xl leading-6 "></div>
          </div>
        </nav>
        <div className="flex gap-1 h-[410px] mt-2">
          <div className="w-2/4 h-full bg-slate-500 ">
            <img
              className="w-full h-full object-fill"
              src={image?.original ?? <p>No Page</p>}
              alt=""
            />
          </div>
          <div className="w-1/4 h-full bg-slate-400"></div>
        </div>
        <div>
          <div className="w-3/5">
            <div className="my-1">
              {genres?.length
                ? genres.map((elem, index) => (
                    <span
                      key={index}
                      className="border-2 border-slate-900  w-12 h-9 ml-1 px-4 rounded-3xl text-center text-xl"
                    >
                      {elem}
                    </span>
                  ))
                : null}
            </div>
            <p className="text-2xl font-bold py-1">{summary}</p>
            <hr className="border-slate-600" />
            <p className="text-2xl font-bold py-2">Creator:Andrew Kimani</p>
            <hr className="border-slate-600" />
            <p className="text-2xl font-bold py-2">Stars</p>
            <hr className="border-slate-600" />
            <p className="text-2xl font-bold py-2">
              ImdbPro See Production ,box oices and company info
            </p>
          </div>
        </div>
      </section>
      <div>
        <p>Nominated or Primetime Emmy</p>
      </div>

      <div>
        <p>Videos</p>
        <div className="w-[390px] h-[220px] bg-slate-500"></div>
        <div className="w-[390px] h-[220px] bg-slate-500"></div>
      </div>
      <div>
        <p>Photos</p>
        <div className="w-48 h-48 bg-slate-500"></div>
      </div>
    </div>
  );
}
