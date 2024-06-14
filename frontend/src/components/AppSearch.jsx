import { useEffect, useRef, useState, useContext } from "react";
import { VscSearch, VscClose } from "react-icons/vsc";
import { AuthContext } from "../context/authContex";

function AppSearch() {
  let search = useRef(null);
  let { query, setQuery } = useContext(AuthContext);


  return (
    <div className="app-search">
      <input
        type="text"
        placeholder="Search"
        ref={search}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <VscSearch />
    </div>
  );
}

export default AppSearch;
