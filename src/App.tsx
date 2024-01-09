import { useQuery } from "@tanstack/react-query";
import { Games } from "./components/types/types";
import Navbar from "./components/Navbar";
import { GamesData } from "./components/fetches/DataFetch";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";



function App() {
  const {data:games  } = useQuery({
    queryKey: ["games"],
    queryFn: GamesData,
    select: (data) => data.data
  })
  
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home games={games as Games[] } />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
