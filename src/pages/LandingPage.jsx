//Inbuilt modules
import { useContext } from "react";

//My imports
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import MovieCardFetch from "../fetch/MovieCardFetch";
import ErrorBoundary from "../ErrorBoundary";

//#rd Party Modules
import { useQuery } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";

//This is the main page of the application
function LandingPage() {

  let query = "dad";

  //Get the results of the movies and the query is initially set to dad
  //The Details key which is the first item in the array is the name under which the result is cached
  const res = useQuery(["Details", query], MovieCardFetch);

  //Get the loading state from res
  if (res.isLoading) {
    return (
      <div className="animate-spin">
        <FaSpinner />
      </div>
    );
  }

  return (
    <div className="bg-slate-950">
      <Navbar />
      <Results heading={"Featured today"} props={res.data}/>
    </div>
  );
}

function LandingPageError() {
  return (
    <ErrorBoundary>
      <LandingPage />
    </ErrorBoundary>
  );
}

export default LandingPageError;
