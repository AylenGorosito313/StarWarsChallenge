import React, { useState } from "react";
import style from "./Cards.module.css";
import cover from "../../assets/fondoBattle.png"
import { getRandomIntInclusive } from "./randomNumber.js";
export default function Cards({ data, NewSearch }) {
  console.log(data);
  const [Random, setRandom] = useState(0);

  const handlerBattle = () => {
    setRandom(Random + 1);
  };

  let x_1 = getRandomIntInclusive();

  console.log(x_1);

  let obj_1 = NewSearch !== -1 ? [data[NewSearch]] : [data[x_1]];

  return (
    <>
      <div className={style.CentradoContainer}>
        <div className={style.container}>
          {Random &&
            obj_1?.map((ele, index) => {
              return (
                <>
                  <div>
                    <img
                      className={style.img}
                      src={
                        ele.image === undefined
                          ? "https://res.cloudinary.com/dj8p0rdxn/image/upload/v1675276153/za0cisep5lvje6leiqie.jpg"
                          : ele?.image
                      }
                      alt={ele.name}
                    />

                    <div className={style.content}>
                      <p className={style.p}> ID : {ele.id}</p>
                      <p className={style.p}> Gender : {ele.gender}</p>
                      <p className={style.p}> Species : {ele.species}</p>
                      <p className={style.p}>Height : {ele.height}</p>
                    </div>
                  </div>
                  <div className={style.Name}>
                    <h1 className={style.h1}>{ele.name}</h1>
                  </div>
                </>
              );
            })}
        </div>
        <div className={style.divbutton}>
          <button className={style.button} onClick={handlerBattle}>
            {" "}
            Random Character{" "}
          </button>
        </div>
      </div>
    </>
  );
}
