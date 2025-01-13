import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import '../../categories/Categories.css'

export default async function subIngredients({ params }) {
  const name = params[`sub-ingredients`];
  async function getAPTByName() {
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let { meals } = await api.json()
    if (meals !== null) {

      let first20Items = meals.slice(0, 20);
      return first20Items
    }
  }
  let data = await getAPTByName()

  return (
    <>
      <div className="category-content">
        <div className="container">
          <div className="row">
            {data ? data.map((category) =>
              <div className="col-md-3 p-2" key={category.idMeal}>
                <Link href={`./sub-ingredients/${category.idMeal}`}>
                  <article className="position-relative rounded-3 overflow-hidden">
                    <Image width={600} height={200} src={category.strMealThumb} className=' w-100 h-100 image' alt={category.strMealThumb} />
                    <div className="one-category position-absolute text-center">
                      <h3 className="mx-2 text-light">{category.strMeal}</h3>
                    </div>
                  </article>
                </Link>
              </div>
            ) :
              <div>
                <h1 className=' bg-danger mt-5 text-center fw-bolder text-dark'>NO data to display</h1>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}
