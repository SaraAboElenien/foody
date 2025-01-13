import React from 'react'
import Link from 'next/link'
import './Area.css'

export default async function Areas() {
  async function getArea() {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let { meals } = await data.json()

    let first20Items = meals.slice(0, 20);
    return first20Items
  }
  const areas = await getArea()

  return (
    <>
        <div className="area content">
          <div className="container">
            <div className="row py-5 ">
              {areas.map((area) =>
                <div className="col-lg-3 col-md-4 col-sm-6 " key={area.strArea}>
                  <Link className='list-unstyled text-black ' href={`/areas/${area.strArea}`}>
                    <article className="position-relative rounded-3 overflow-hidden py-5 m-3 d-flex align-items-center justify-content-center">
                      <span className=" fa-3x">{area.strArea}
                      </span>
                      <div className="one-area position-absolute text-center d-flex justify-content-center align-items-center ">
                        <h3 className="mx-2 text-light"><i class="fa-solid fa-location-dot "></i> </h3>
                      </div>
                    </article>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
  )



}
