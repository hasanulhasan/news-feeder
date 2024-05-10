import { useEffect, useState } from "react";

export default function useNewsQuery(category, searchTerm) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ state: false, message: "" });
  const [data, setData] = useState({});

  // console.log(category, searchTerm)

  const fetchData = async (category) => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:8000/v2/top-headlines?category=${category}`
      );
      if (!res.ok) {
        const errorMsg = "There is server problem";
        throw new Error(errorMsg);
      }
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError({ ...error, state: true });
      setError({ ...error, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchData = async (searchTerm) => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:8000/v2/search?q=${searchTerm}`
      );
      if (!res.ok) {
        const errorMsg = "There is server problem";
        throw new Error(errorMsg);
      }
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError({ ...error, state: true });
      setError({ ...error, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchSearchData(searchTerm);
    } else {
      fetchData(category);
    }
  }, [category, searchTerm]);

  return { loading, error, data };
}
