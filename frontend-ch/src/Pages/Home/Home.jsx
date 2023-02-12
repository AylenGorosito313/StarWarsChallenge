import React, { useEffect, useState } from "react";
import List from "../../components/List/List";

import axios from "axios";
import style from "./Home.module.css";
import Title from "../../assets/titulo2.png";

import versus from "../../assets/vS.png";

import SearchCaracter from "../../components/SearchBar/Caracters/Caracter_1/SearchCaracter";
export default function Home() {
  const [Api, setApi] = useState("");

  useEffect(() => {
    const GetInfo = async () => {
      const res = await axios.get(
        "https://akabab.github.io/starwars-api/api/all.json"
      );
      setApi(res.data);
    };
    GetInfo();
  }, []);

  console.log(Api);

  return (
    <div className={style.metaContainer}>
      <div className={style.divCentrado}>
        <img src={Title} alt="a" />
        {/* <h1 className={style.title}> Star Wars Battle App</h1> */}
        <div className={style.layout}>
          {/* <SearchCaracter2 data={Api} /> */}

          <SearchCaracter data={Api} />
          <div>
            <img src={versus} alt="" />
          </div>
          <SearchCaracter data={Api} />
        </div>

        <List data={Api} />
      </div>
    </div>
  );
}
