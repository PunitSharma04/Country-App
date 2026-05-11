// import { useEffect, useState } from "react";
// import "../Country.css";
// import "../App.css"
// import CountryDetailShimmer from './CountryDetailsShimmer'
// import {
//   Link,
//   useNavigate,
//   useOutletContext,
//   useParams,
// } from "react-router-dom";

// import { useWindowSize } from "../Hooks/useWindowSize";


// const CountryDetails = () => {
//   const navigate = useNavigate();
//   const params = useParams();
//   const countryName = params.country;
//   const  {countriesData}  = useOutletContext();
//   const  {isDark}  = useOutletContext();
//   // const [borderCountry, setBorderCountry] = useState([]);



//   if (!countryName) {
//     throw new Response("Invalid country request", { status: 400 });
//   }




//   const country = countriesData.find((c) => {
//     return c.name.common === countryName;
//   });

//   if (!country) {
//     throw new Response("Country not found", {
//       status: 404,
//       statusText: "Not Found",
//     });
//   }

//   function RenderIfExist({ label, value }) {
//     if (!value) {
//       return "";
//     }
//     return (
//       <p className="detail-item">
//         <b>{label}: </b>
//         {value}
//       </p>
//     );
//   }

//   const flag = country.flags.svg;
//   const nativeName = Object.values(
//     Object.values(country.name?.nativeName || {})[0] || {},
//   ).join(", ");
//   const population = country.population.toLocaleString();
//   const region = country.region;
//   const topLevelDomain = country.tld?.join(", ");
//   const capital = country.capital?.join(", ");
//   const currencies = Object.values(country.currencies || {})[0]?.name;
//   const languages = Object.values(country.languages || {}).join(", ");
//   const borders = country.borders || [];

//   // useEffect(() => {
//   //   if (!borders || borders.length === 0) {
//   //     setBorderCountry([]);
//   //     return;
//   //   }

//   //   const fetchBorders = async () => {
//   //     try {
//   //       const results = await Promise.all(
//   //         borders.map(async (border) => {
//   //           const res = await fetch(
//   //             `https://restcountries.com/v3.1/alpha/${border}`,
//   //           );
//   //           const [data] = await res.json();
//   //           return data;
//   //         }),
//   //       );

//   //       console.log("BORDER RESULTS:", results);
//   //       setBorderCountry(results);
//   //     } catch (err) {
//   //       console.error(err);
//   //     }
//   //   };

//   //   fetchBorders();
//   // }, [borders]);

//   // useEffect(() => {
//   //   setBorderCountry([]);
//   // }, [countryName]);

//   const countryMap = {};
//   countriesData.forEach((c) => {
//     countryMap[c.cca3] = c;
//   });

//   return (
//     <main className={isDark?'dark':''}>
      
//       <div className="main-container">
//         <Link to={"#"} className="back-button" onClick={() => navigate(-1)}>
//           <i className="fa-solid fa-arrow-left" />
//           &nbsp; <span>Back</span>
//         </Link>
//         {
//           countriesData == null?(<CountryDetailShimmer/>):(<div className="country-details">
//           <img
//             className="country-card-img"
//             src={flag}
//             alt={countryName + " flag"}
//           />
//           <div className="detail-text-container">
//             <h1>{countryName}</h1>
//             <div className="detail-text">
//               <div className="detail-text-primary">
//                 <RenderIfExist label="NativeName" value={nativeName} />
//                 <RenderIfExist label="Population" value={population} />
//                 <RenderIfExist label="Region" value={region} />
//                 <RenderIfExist label="Capital" value={capital} />
//               </div>
//               <div className="detail-text-secondary">
//                 <RenderIfExist
//                   label="Top Level Domain"
//                   value={topLevelDomain}
//                 />
//                 <RenderIfExist label="Currencies" value={currencies} />
//                 <RenderIfExist label="language" value={languages} />
//               </div>
//             </div>

//             {borders.length != 0 && (
//               <div className="border-countries">
//                 <p>
//                   <b>Border Countries:&nbsp;&nbsp;</b>
//                 </p>
//                 <div className="border-countries-list">
//                   {borders.map((code) => {
//                     const border = countryMap[code];
//                     if (!border) return null;

//                     return (
//                       <Link key={border.cca3} to={`/${border.name.common}`}>
//                         {border.name.common}
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>)
//         }

//       </div>
//     </main>
//   );
// };

// export default CountryDetails;


import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import "../Country.css";
import "../App.css";
import CountryDetailShimmer from "./CountryDetailsShimmer";

const CountryDetails = () => {
  const navigate = useNavigate();
  const { country: countryName } = useParams();

  // ✅ Correct destructuring (only once)
  const { countriesData, isDark } = useOutletContext();

  // ✅ Helper component
  function RenderIfExist({ label, value }) {
    if (!value) return null;

    return (
      <p className="detail-item">
        <b>{label}: </b>
        {value}
      </p>
    );
  }


  let content;

  if (!countriesData || countriesData.length === 0) {

    content = <CountryDetailShimmer />;
  } else {
    const country = countriesData.find(
      (c) => c.name.common === countryName
    );

    if (!country) {

      content = <h2>Country not found</h2>;
    } else {

      const flag = country.flags?.svg;
      const nativeName = Object.values(
        Object.values(country.name?.nativeName || {})[0] || {}
      ).join(", ");

      const population = country.population?.toLocaleString();
      const region = country.region;
      const topLevelDomain = country.tld?.join(", ");
      const capital = country.capital?.join(", ");
      const currencies = Object.values(country.currencies || {})[0]?.name;
      const languages = Object.values(country.languages || {}).join(", ");
      const borders = country.borders || [];


      const countryMap = {};
      countriesData.forEach((c) => {
        countryMap[c.cca3] = c;
      });


      content = (
        <div className="country-details">
          <img
            className="country-card-img"
            src={flag}
            alt={countryName + " flag"}
          />

          <div className="detail-text-container">
            <h1>{countryName}</h1>

            <div className="detail-text">
              <div className="detail-text-primary">
                <RenderIfExist label="Native Name" value={nativeName} />
                <RenderIfExist label="Population" value={population} />
                <RenderIfExist label="Region" value={region} />
                <RenderIfExist label="Capital" value={capital} />
              </div>

              <div className="detail-text-secondary">
                <RenderIfExist label="Top Level Domain" value={topLevelDomain} />
                <RenderIfExist label="Currencies" value={currencies} />
                <RenderIfExist label="Languages" value={languages} />
              </div>
            </div>

            {borders.length > 0 && (
              <div className="border-countries">
                <p>
                  <b>Border Countries:&nbsp;&nbsp;</b>
                </p>

                <div className="border-countries-list">
                  {borders.map((code) => {
                    const border = countryMap[code];
                    if (!border) return null;

                    return (
                      <Link key={border.cca3} to={`/${border.name.common}`}>
                        {border.name.common}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  }


  return (
    <main className={isDark ? "dark" : ""}>
      <div className="main-container">
        <Link to="#" className="back-button" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left" />
          &nbsp; <span>Back</span>
        </Link>

        {content}
      </div>
    </main>
  );
};

export default CountryDetails;