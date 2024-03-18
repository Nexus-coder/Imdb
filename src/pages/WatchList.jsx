import { useContext } from "react";
import MovieWatchListContext from "../MovieWatchListContext";
import Navbar from "../components/Navbar";
function WatchList() {
  const [props, _] = useContext(MovieWatchListContext);
  console.log("My Movie watchlist is ", props);

  return (
    <>
      <Navbar />
      <div className="flex">
        {props.map((prop, index) => (
          <figure
            key={index}
            className="relative text-white bg-[#1B263B] w-[300px] h-[500px] sm:w-[255px] sm:h-[545px] p-1 m-1 slide"
          >
            <a href={`details/${prop.id}`}>
              <div className="overflow-hidden">
                <img
                  className="h-[320px] sm:h-[355px] hover:brightness-50"
                  src={prop.image?.original ?? <p>No</p>}
                  alt=""
                />
              </div>
            </a>
            <figcaption>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill=""
                  >
                    <g clipPath="url(#clip0_1_15)">
                      <path
                        d="M7.33003 0.424205L7.33032 0.42484L9.11678 4.28851L9.17302 4.41014L9.30543 4.43065L13.295 5.04862L13.2958 5.04873C13.4302 5.06912 13.5506 5.16967 13.5969 5.32053C13.6439 5.47393 13.6042 5.63641 13.5015 5.74451C13.5014 5.7446 13.5013 5.74468 13.5012 5.74477L10.6087 8.75732L10.5225 8.84712L10.5422 8.97005L11.2244 13.2243C11.2244 13.2244 11.2244 13.2244 11.2244 13.2244C11.2496 13.3834 11.1863 13.5396 11.0693 13.6293C10.9565 13.7157 10.8069 13.7251 10.6853 13.6565L10.6848 13.6562L7.11706 11.6546L6.99478 11.586L6.87248 11.6546L3.30792 13.6531C3.30789 13.6531 3.30786 13.6531 3.30783 13.6532C3.1826 13.7229 3.03515 13.7126 2.92284 13.6266L2.77078 13.825L2.92283 13.6266C2.80427 13.5357 2.7402 13.3788 2.76506 13.2218C2.76507 13.2217 2.76508 13.2217 2.76509 13.2216L3.44732 8.96732L3.46704 8.84432L3.38072 8.7545L0.487497 5.74395L0.486935 5.74337C0.38406 5.63702 0.34524 5.47333 0.39238 5.32131C0.438147 5.17371 0.558524 5.07117 0.695656 5.04843L4.68405 4.43065L4.81647 4.41014L4.8727 4.28851L6.65846 0.426344C6.65856 0.426119 6.65867 0.425893 6.65878 0.425668C6.72705 0.281161 6.85828 0.200779 6.99474 0.200779C7.13297 0.200779 7.26508 0.282684 7.33003 0.424205ZM7.22161 2.0059L6.99453 1.51543L6.7678 2.00606L5.40125 4.96328C5.40116 4.96349 5.40106 4.96369 5.40097 4.9639C5.34272 5.08747 5.23572 5.16717 5.11735 5.18624C5.11717 5.18627 5.117 5.18629 5.11683 5.18632L2.03731 5.66191L1.56177 5.73535L1.89524 6.08224L4.13142 8.40835C4.13153 8.40847 4.13164 8.40859 4.13176 8.40871C4.22105 8.50269 4.2641 8.6374 4.2427 8.77047L3.71409 12.0433L3.63151 12.5546L4.08319 12.3012L6.82278 10.7645L6.82295 10.7644C6.93233 10.703 7.0602 10.7038 7.16521 10.7637L7.16671 10.7645L9.90629 12.3012L10.3576 12.5544L10.2754 12.0435L9.74938 8.7732C9.72764 8.63796 9.76998 8.50463 9.85912 8.41271L9.85987 8.41193L12.0968 6.08497L12.43 5.73845L11.955 5.66468L8.87576 5.1864C8.87554 5.18637 8.87533 5.18633 8.87511 5.1863C8.75645 5.16691 8.64848 5.08779 8.5914 4.9645L8.36453 5.06953L8.5914 4.96449L7.22161 2.0059Z"
                        fill="#FAFF00"
                        stroke="#FAFF00"
                        strokeWidth="0.5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_15">
                        <rect width="15" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-xl ml-1">Rating :</span>
                  <span className="text-xl">
                    {(prop.score * 10).toFixed(1)}
                  </span>
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
          </figure>
        ))}
      </div>
    </>
  );
}

export default WatchList;
