import { useQuery } from "@tanstack/react-query";
import { Games } from "./components/types/types";
import Navbar from "./components/Navbar";
import { GamesData } from "./components/fetches/DataFetch";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import AllGames from "./components/AllGames";
import { AnimatePresence } from 'framer-motion';
import { useLocation } from "react-router";
import Loader from "./components/Loader";
import GamePage from "./components/GamePage";




function App() {
  const location = useLocation()


  const {data:games,isFetching} = useQuery({
    queryKey: ["games"],
    queryFn: GamesData,
    select: (data) => data.data,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false
  })
  if (isFetching) {
    return <Loader/>
  }
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <AnimatePresence>
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Home games={games as Games[]} />} />
        <Route path="/games" element={<AllGames games={games as Games[]}/> } />
        <Route path="/game/:id" element={<GamePage/> } />
      </Routes>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;
