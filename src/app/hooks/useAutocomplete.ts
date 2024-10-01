import { useEffect, useState } from "react";
import { AutocompleteResult } from "../utils/interfaces";
import api from "../services/api";

export default function useAutocomplete() {
  const [results, setResults] = useState<AutocompleteResult[]>([]);
  const [status, setStatus] = useState("idle");
  let timeoutId: NodeJS.Timeout;

  async function search(query: string) {
    if (query.length >= 3) {
      try {
        setStatus("loading");
        await api
          .get(`/api/products/autocomplete?query=${query}&param=name&limit=10`)
          .then((res) => {
            if (res.status === 200) {
              setStatus("success");
              console.log(res.data);
              setResults(res.data["results"]);
            }
          })
          .catch(function (error) {
            setStatus("error");
            alert(error);
            if (error.response) {
              setStatus("error");
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error);
            }
            console.log(error.config);
          });
      } catch (error) {
        alert(error);
        setStatus("error");
      }
    } else {
      setResults([]);
    }
  }

  const debounceSearch = (query: string) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      search(query);
    }, 200);
  };

  return { search: debounceSearch, results, status };
}
