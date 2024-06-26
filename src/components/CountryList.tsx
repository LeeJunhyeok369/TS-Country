import React from "react";
import { TCountry } from "../types/schema";

interface Props {
  setCountry: React.Dispatch<React.SetStateAction<TCountry[]>>;
  setFavoriteCountries: React.Dispatch<React.SetStateAction<TCountry[]>>;
  countries: TCountry[];
  favorite?: boolean;
}

const CountryList: React.FC<Props> = ({
  setCountry,
  setFavoriteCountries,
  countries,
  favorite = false,
}) => {
  // const handleFavorite = () => {
  // };
  console.log(countries, favorite);
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"></ul>
  );
};

export default CountryList;
