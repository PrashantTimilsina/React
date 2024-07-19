import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { addItem } from "../utiles/cartSlice";
import { useDispatch } from "react-redux";
// import { addItem } from "../utiles/cartSlice";
// import { useDispatch } from "react-redux";
const CountryMenu = () => {
  const { name } = useParams();
  const [countryMenu, setCountryMenu] = useState(null);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("Grapes"));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          setCountryMenu(data[0]);
        }
      } catch (error) {
        console.error("Error fetching the data: ", error);
      }
    };
    getData();
  }, [name]);

  return (
    <div className="m-5 relative left-96 bg-gray-400 border-2 p-6 w-96 border-black ">
      {countryMenu ? (
        <>
          <h1 className="flex justify-center font-bold text-2xl mb-5">
            {countryMenu.name.common}
          </h1>
          <img
            src={countryMenu.flags.png}
            alt={`Flag of ${countryMenu.name.common}`}
          />

          <h3 className="flex justify-center font-bold text-2xl">
            Population: {countryMenu.population.toLocaleString()}
          </h3>
          <h4 className="flex justify-center font-bold text-2xl ">
            Capital: {countryMenu.capital}
          </h4>
          <div>
            <button
              className="p-2 m-5 bg-green-100"
              onClick={() => handleAddItem()}
            >
              Add Items
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountryMenu;
