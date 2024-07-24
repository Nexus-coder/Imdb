//This are my imports
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import WatchListProvider from "./MovieWatchListContext";
import ShowMoviePage from "./pages/ShowMoviePage";
import LandingPage from "./pages/LandingPage";
import WatchList from "./pages/WatchList";

//Context is used to apply app data globally but you you should be keen on what component is consuming what

function App() {
  return (
    <BrowserRouter>
      {/* Passed in the whole hook to the context provider */}
      <WatchListProvider>
        <Routes>
          <Route path="/details/:id" element={<ShowMoviePage />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </WatchListProvider>
    </BrowserRouter>
  );
}

export default App;
