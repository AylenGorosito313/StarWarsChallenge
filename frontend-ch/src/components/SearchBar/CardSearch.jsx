import React from "react";
import style from "./CardSearch.module.css";
import coverStart from "../../assets/Frame 1.png";
export default function CardSearch({ NewSearch, data, allCaracters }) {

  let input = NewSearch.toLowerCase();


  let results =
    NewSearch &&
    data.find((ele) => ele.name.toLowerCase() === NewSearch.toLowerCase());

  let affiliation = results && results.affiliations.includes("Galactic Empire");
 
  return (
    <>
      {results === "" && allCaracters === false ? (
        <div className={style.divCover}>
          <img className={style.cover} src={coverStart} alt="a" />
        </div>
      ) : (
        <div className={style.Div}>
          {allCaracters ? (
            <>
              {data &&
                data.map((ele) => {
                  return (
                    <>
                      <div className={style.DivResult}>
                        <img
                          className={style.img}
                          src={ele.image}
                          alt="no load"
                        />{" "}
                        <p className={style.Name}> {ele.name}</p>
                        <div className={style.info}>
                          <p className={style.p}>
                            {" "}
                            <b>ID</b> : {ele.id}
                          </p>
                          <p className={style.p}> Gender: {ele.gender}</p>
                          <p className={style.p}> Species: {ele.species}</p>
                          <p className={style.p}>Height : {ele.height}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
            </>
          ) : results !== undefined ? (
            <div className={results !== "" ? style.DivResult : style.DivStart}>
              <img
                className={style.img}
                src={results !== "" ? results.image : coverStart}
                alt="no load"
              />
              <p className={style.Name}> {results.name}</p>
              <p className={style.p}> ID {results.id}</p>
              <p className={style.p}> Gender {results.gender}</p>
              <p className={style.p}> Species {results.species}</p>
              <p className={style.p}>Height {results.height}</p>
            </div>
          ) : (
            <div className={style.spinner}>hol</div>
          )}
        </div>
      )}
    </>
  );
}
