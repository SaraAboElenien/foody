import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import '../../categories/Categories.css'

export default async function Details({params}) {
  const name = params.subcategories;
  async function getMealByName(){
    let filtration = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
  let {meals} = await filtration.json()
  if(meals !== null){

    let first20Items = meals.slice(0,20);
      return first20Items
  }
}
let data = await getMealByName()

  return (
    <>
    <div className="category-content">
      
      <div className="container">
      <div className="row">
        {data? data.map((category)=>
        <div className="col-md-3 p-2" key={category.idMeal}>
           <Link href={`./subcategories/${category.idMeal}`}>
           <article className="position-relative rounded-3 overflow-hidden">
           <Image  width={600} height={200} src={category.strMealThumb} className=' w-100 h-100 image'  alt={category.strMealThumb}/>
            <div className="one-category position-absolute text-center">
                <h3 className="mx-2 text-light">{category.strMeal}</h3>
            </div>
        </article>
           </Link>
        </div>
        ):
        <div>
          <h1 className=' bg-danger mt-5 text-center fw-bolder text-dark'>Opps... No Data To Show Here!!!!</h1>
        </div>
        }
      </div>
      </div>
      </div>
    </>
  )
}
