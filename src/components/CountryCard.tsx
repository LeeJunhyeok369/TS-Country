import React from "react";
import { TCountry } from "../types/schema";

interface Props {
  country: TCountry;
  favorite: boolean;
  clickEvent: (country: TCountry) => void;
}

const CountryCard: React.FC<Props> = ({
  country,
  favorite = false,
  clickEvent,
}) => {
  return (
    <div
      className={
        `p-4 bg-white rounded-lg shadow-md hover:shadow-lg text-left` +
        (favorite ? ` border border-green-500` : "")
      }
      onClick={() => clickEvent(country)}
    >
      <img
        className="w-28 h-16 object-contain m-auto my-6"
        src={country.flags.png}
        alt={`${country.name.common} flag`}
      />
      <h3 className="text-2xl font-bold">{country.name.common}</h3>
      <p className="text-lg text-[#ccc]">{country.capital}</p>
    </div>
  );
};

export default CountryCard;
