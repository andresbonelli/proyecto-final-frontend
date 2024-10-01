import { colors } from "@/app/utils/constants";
import MicIcon from "../icons/Mic";
import SearchIcon from "../icons/Search";
import { useState } from "react";
import { AutocompleteResult } from "@/app/utils/interfaces";
import useAutocomplete from "@/app/hooks/useAutocomplete";
import Loader from "../loader";
import Link from "next/link";

export default function SearchBar() {
  const { search, results, status } = useAutocomplete();

  return (
    <div
      id="searchbar-container"
      className="relative flex flex-row place-items-center w-auto "
    >
      <div className="flex flex-row place-items-center px-4 py-3 gap-2 rounded-lg bg-white shadow-md overflow-hidden w-auto  ">
        <SearchIcon width={17} height={17} fill={colors.grey} />

        <input
          onChange={(e) => search(e.target.value)}
          type="email"
          placeholder="Buscar productos..."
          className="lg:w-96 w-auto outline-none bg-transparent text-grey text-sm"
        />
        <a href="/">
          <MicIcon width={20} height={20} fill={colors.grey} />
        </a>
      </div>
      {results.length > 0 && (
        <div className="absolute top-16 w-full flex flex-col gap-2 max-h-80 bg-white rounded-lg shadow-md p-3">
          {status === "loading" && <Loader />}

          {results.map((result) => {
            return (
              <Link href={`/products/${result.id}`} key={result.id}>
                <p className="text-sm text-grey">{result.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
