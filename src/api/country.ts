import axios from "axios";
import { TCountry } from "../types/schema";

export const getCountries = async (): Promise<TCountry[]> => {
  try {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    return data as TCountry[];
  } catch (err) {
    return [];
  }
};
