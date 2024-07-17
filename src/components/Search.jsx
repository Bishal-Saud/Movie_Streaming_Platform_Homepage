import React from "react";
import { CiSearch } from "react-icons/ci";
function Search({ handleSearch }) {
  return (
    <div className=" absolute top-20 right-10  w-52 h-10  text-white bg-[#00000096] flex rounded-md justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="border-none outline-none  p-2 w-32 bg-transparent"
      />
      <CiSearch className="w-10 text-2xl" />
    </div>
  );
}

export default Search;
