import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../categories/Categories.css'


export default async function categories() {
  async function getCategories() {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let { categories } = await data.json()

    let first11Items = categories.slice(0, 11);
    return first11Items

  }
  const categories = await getCategories()

  return (
    <>
      <div className="category-content">

        <div className="container">
          <div className="row">
            {categories.map((category) =>
              <div className="col-lg-3 col-md-4 col-sm-6 p-2" key={category.idCategory}>
                <Link href={`/categories/${category.strCategory}`}>
                  <article className="position-relative rounded-3 overflow-hidden">
                    <Image width={600} height={200} src={category.strCategoryThumb} className=' w-100 h-100 image' alt={category.strCategoryThumb} />
                    <div className="one-category position-absolute text-center">
                      <h3 className="mx-2 text-light">{category.strCategory}</h3>
                      <p className="text-light">{category.strCategoryDescription.split(' ').slice(0, 10).join(' ')}</p>
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
