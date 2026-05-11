import CountriesListShimmer from "./CountriesListShimmer";
import CountryCard from "./CountryCard";
import { useOutletContext } from "react-router-dom";

export default function CountriesContainer({ query }) {
  const { countriesData } = useOutletContext();

  return (
    <>
      {!countriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {countriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query) ||
              country.region.toLowerCase().includes(query)
            )
            .map((country, i) => {
              return (
                <CountryCard
                  key={i}
                  flag={country.flags["svg"]}
                  name={country.name.common}
                  alt={country.name.common}
                  population={country.population.toLocaleString()}
                  region={country.region}
                  capital={country.capital?.[0]}
                />
              );
            })}
        </div>
      )}
    </>
  );
}
