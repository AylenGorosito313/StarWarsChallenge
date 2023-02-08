import React, { useState, useEffect } from "react";
import style from "./Cards.module.css";
import versus from "../../assets/vS.png";
import Card from "./Card";
import cover from "../../assets/stars.jpg";
import { getRandomIntInclusive } from "./randomNumber.js";
export default function Cards({ data }) {
  console.log(data);
  const [Random, setRandom] = useState(0);

  const handlerBattle = () => {
    setRandom(Random + 1);
  };

  let x_1 = getRandomIntInclusive();
  let x_2 = getRandomIntInclusive();
  console.log(x_1)

  let obj_1 = [data[x_1]];
  let obj_2 = [data[x_2]];

  return (
    <>
      <div className={style.layout}>
        <div className={style.container}>
          {obj_2[0] !== undefined || obj_1[0] !== undefined ? (
            Random &&
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
            })
          ) : (
            <div> holi</div>
          )}
        </div>
        <div>
          <img src={versus} alt="" />
        </div>

        <div >
         <Card  obj_2={obj_2}  Random={Random} />
      
        </div>
      </div>

      <div className={style.divbutton}>
        <button className={style.button} onClick={handlerBattle}>
          {" "}
          Random Battle{" "}
        </button>
      </div>
    </>
  );
}
