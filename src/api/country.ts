import axios from "axios";
import { TCountry } from "../types/schema";

export const getCountries = async (): Promise<TCountry[]> => {
  try {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    console.log(data);
    return data as TCountry[];
  } catch (err) {
    console.log(err);
    return [];
  }
};
