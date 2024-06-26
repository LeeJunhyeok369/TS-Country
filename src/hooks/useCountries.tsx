import { useEffect, useState } from "react";
import { getCountries } from "../api/country";
import { TCountry } from "../types/schema";

export const useCountries = () => {
  const [countries, setCountries] = useState<TCountry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (err) {
        setError("Failed to fetch countries");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};
