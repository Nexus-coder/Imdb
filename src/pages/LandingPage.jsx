import Navbar from "../components/Navbar";
import Results from "../components/Results";
import { useQuery } from "@tanstack/react-query";
import MovieCardFetch from "../fetch/MovieCardFetch";
import ErrorBoundary from "../ErrorBoundary";
import { useContext } from "react";
import MovieWatchListContext from "../MovieWatchListContext";
import { FaSpinner } from "react-icons/fa";

function LandingPage() {
  const MovieHook = useContext(MovieWatchListContext);

  let query = "dad";
  const res = useQuery(["Details", query], MovieCardFetch);
  if (res.isLoading) {
    return (
      <div className="animate-spin">
        <FaSpinner />
      </div>
    );
  }
  // console.log(res.data)
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Results heading={"Featured today"} props={res.data} hook={MovieHook} />
      <Results heading={"Featured today"} props={res.data} hook={MovieHook} />
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
