import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [localValue, setlocalValue] = useState(query);

  useEffect(() => {
    setlocalValue(query);
  }, [query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const cleaned = localValue.trim();
      if ((cleaned === "" && query === null) || cleaned === query) {
        return;
      }

      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        if (cleaned !== "") {
          params.set("q", cleaned);
        } else {
          params.delete("q");
        }

        params.delete("page");

        return params;
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [localValue, query, setSearchParams]);

  return (
    <input
      type="text"
      placeholder="search"
      value={localValue}
      onChange={(e) => setlocalValue(e.target.value)}
    />
  );
};
export default SearchFilter;
