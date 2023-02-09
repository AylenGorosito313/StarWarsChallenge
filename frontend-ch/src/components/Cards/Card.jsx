import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import { getRandomIntInclusive } from "./randomNumber";
import cover from "../../assets/fondoBattle.png";
export default function Card({ data, NewSearch }) {
  const [Random, setRandom] = useState(0);

  useEffect(() => {
    setRandom(Random);
  }, []);

  const handlerBattle = () => {
    setRandom(Random + 1);
  };

  let x_2 = getRandomIntInclusive();

  let obj_2 = NewSearch !== -1 ? [data[NewSearch]] : [data[x_2]];
  console.log(obj_2);
  return (
    <>
      <div className={style.CentradoContainer}>
        <div className={style.container}>
          {obj_2[0] === undefined || NewSearch  === -1 ? (
            <div>
              <img className={style.img} src={cover} alt="nop" />
            </div>
          ) : (
            Random &&    obj_2?.map((ele, index) => {
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
            })
          )}
        </div>

        <div className={style.divbutton}>
          <button className={style.button} onClick={handlerBattle}>
            {" "}
            Random Character{" "}
          </button>
          <div>{/* <SearchCaracter  data ={data} /> */}</div>
        </div>
      </div>
    </>
  );
}
