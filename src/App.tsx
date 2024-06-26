import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import { useCountries } from "./hooks/useCountries";
import { TCountry } from "./types/schema";

function App() {
  const [country, setCountry] = useState<TCountry[]>([]);
  const [favoriteCountries, setFavoriteCountries] = useState<TCountry[]>([]);
  const { countries, loading, error } = useCountries();

  useEffect(() => {
    if (countries || !country) {
      setCountry(countries);
    }
  }, [countries]);

  return (
    <div className="min-h-vh mx-3 sm:mx-5 md:mx-16 lg:mx-6 xl:mx-24 2xl:mx-48 text-center">
      <h5 className="text-2xl">Favorite Countries</h5>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <CountryList
        setFavoriteCountries={setFavoriteCountries}
        setCountry={setCountry}
        countries={favoriteCountries}
        favorite
      />
      <h3 className="text-4xl">Countries</h3>
      <CountryList
        setFavoriteCountries={setFavoriteCountries}
        setCountry={setCountry}
        countries={country}
      />
    </div>
  );
}

export default App;
