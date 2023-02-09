import React, { useState } from "react";
import style from "./SearchCaracter2.module.css";
import CardSearch from "../../CardSearch";
import Cards from "../../../Cards/Cards";
export default function SearchCaracter2({ data }) {
  console.log(data)
  const [NewSearch, setNewSearch] = useState("");
  const [Open, setOpen] = useState(false);
  console.log(NewSearch)
let names = data && data?.map((ele) => ele.name.toLowerCase())

 let index = names.indexOf(NewSearch?.toLowerCase())
console.log(index)
  const handlerSearch = () => {
    setOpen(!Open);
 
  };

  return (
    <>
  <div className={style.CentradoContainer} >
  <Cards   data={ data } NewSearch={index} />
        <div className={style.Container}>
        {Open && (
          <div className={style.search}>
            <input
              onChange={(e) => setNewSearch(e.target.value)}
              type="text"
              className={style.search__input}
              placeholder="Search ..."
            />
          </div>
        )}
        <div>
          <button onClick={handlerSearch} className={style.search__button}>
            <svg
              className={style.search__icon}
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
     
  </div>
  
    
    </>
  );
}
