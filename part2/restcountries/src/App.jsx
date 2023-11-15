import axios from "axios";
import React, { useEffect, useState } from "react";
import { Search } from "./components/Search";
import { SearchResult } from "./components/SearchResult";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  const URL = `https://restcountries.eu/rest/v2/name/${search}`;

  const getCountries = () => {
    axios.get(URL).then((res) => {
      const { data } = res;
      console.log(res, data);
      setCountries(data);
    });
  };
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <SearchResult
        countries={countries}
        setCountries={setCountries}
        search={search}
      />
    </div>
  );
};

export default App;
