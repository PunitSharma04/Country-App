import Header from "./Components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import CountryDetailShimmer from "./Components/CountryDetailsShimmer";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")),
  );
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,cca3,population,borders,flags,region,tld,currencies,languages",
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);
  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet
        context={{
          countriesData,
          isDark
        }}
      />
    </>
  );
};

export default App;
