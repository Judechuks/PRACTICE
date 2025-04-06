import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Home from "./pages/Home";
import FetchAndPaginate from "./pages/FetchAndPaginate";
import FetchOnClick from "./pages/FetchOnClick";
import FetchOnScroll from "./pages/FetchOnScroll";
import CountryDetails from "./pages/CountryDetails";
import MutateData from "./pages/MutateData";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/paginate" element={<FetchAndPaginate />} />
        <Route path="/click" element={<FetchOnClick />} />
        <Route path="/scroll" element={<FetchOnScroll />} />
        <Route path="/countries/:id" element={<CountryDetails />} />
        <Route path="/mutate" element={<MutateData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
