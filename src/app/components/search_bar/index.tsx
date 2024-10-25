"use client";

import { useEffect, useRef } from "react";
import useAutocomplete from "@/hooks/useAutocomplete";
import { colors } from "@/utils/constants";
import SearchIcon from "../icons/Search";
import Link from "next/link";
import Loader from "../loader";
// import MicIcon from "../icons/Mic";

export default function SearchBar() {
  const { search, results, status } = useAutocomplete();
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchResultsRef.current &&
      !searchResultsRef.current.contains(event.target as Node)
    ) {
      search("");
    }
  };
  
  useEffect(() => {
    if (search.length > 0) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [search]);

  return (
    <div
      id="searchbar-container"
      className="relative flex flex-row place-items-center w-full px-5  "
    >
      <div className="lg:w-96 flex flex-row place-items-center px-4 py-3 gap-2 rounded-lg bg-white shadow-md overflow-hidden w-full">
        <SearchIcon width={17} height={17} fill={colors.grey} />

        <input
          onChange={(e) => search(e.target.value)}
          type="text"
          placeholder="Buscar productos..."
          className="flex-grow  outline-none bg-transparent text-grey text-sm"
        />
        {/* TODO: speak to text search input */}
        {/* <a href="/">
          <MicIcon width={20} height={20} fill={colors.grey} />
        </a> */}
      </div>
      {results.length > 0 && (
        <div
          ref={searchResultsRef}
          className="absolute top-16 w-full flex flex-col gap-2 max-h-80 bg-white rounded-lg shadow-md p-3"
        >
          {status === "loading" && <Loader />}

          {results.map((result) => {
            return (
              <Link
                onClick={() => search("")}
                href={`/products/${result.id}`}
                key={result.id}
              >
                <p className="text-sm text-grey">{result.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
