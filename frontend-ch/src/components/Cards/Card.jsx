import React from 'react'
import style from "./Card.module.css"
export default function Card({obj_2,Random}) {
  return (
    <div className={style.container}>
    {obj_2[0] !== undefined ? (
      Random &&
      obj_2?.map((ele, index) => {
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
  )
}
