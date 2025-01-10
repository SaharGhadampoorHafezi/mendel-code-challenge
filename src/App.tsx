import "./App.css";
import { Route, Routes } from "react-router";
import SearchBar from "./pages/search-bar";
import { Protein } from "./pages/protein";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/protein/:id" element={<Protein />} />
      </Routes>
    </div>
  );
}

export default App;
