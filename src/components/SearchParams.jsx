import Navbar from "./Navbar";
import ShowMoviePage from "../ScreenPages/ShowMoviePage";

export default function SearchParams() {
  return (
    <>
      <Navbar />
      {/* <Modal/> */}
      {/* <Carousel /> */}
      {/* <ShowMoviePage/> */}
      <ShowMoviePage props={res.data[0]} />
      {/* <Results heading = {"Featured today"} props={res.data}/>
    
    <Results heading = {"Featured today"} props={res.data}/>
    <Results heading = {"Featured today"} props={res.data}/> */}
    </>
  );
}
