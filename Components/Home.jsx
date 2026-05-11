import "../App.css";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesList";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useWindowSize } from "../Hooks/useWindowSize";

export default function Home() {
  const { isDark } = useOutletContext();
  const [query, setQuery] = useState("");
  return (
    <main className={isDark?'dark':''}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
        
      </div>
      <CountriesContainer query={query} />
    </main>
  );
}
