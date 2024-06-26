import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TCountry } from "../types/schema";
import CountryCard from "./CountryCard";

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
  const handleFavoriteCancel = (country: TCountry) => {
    setFavoriteCountries((prev) => prev.filter((c) => c !== country));
    setCountry((prev) => [...prev, country]);
  };

  const handleFavoriteAdd = (country: TCountry) => {
    setFavoriteCountries((prev) => [...prev, country]);
    setCountry((prev) => prev.filter((c) => c !== country));
  };

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {countries.map((data) => (
        <CountryCard
          key={uuidv4()}
          country={data}
          favorite={favorite}
          clickEvent={favorite ? handleFavoriteCancel : handleFavoriteAdd}
        />
      ))}
    </ul>
  );
};

export default CountryList;
