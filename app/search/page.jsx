"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import '../categories/Categories.css'

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitialRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/search.php?f=b'
        );

        const data = await response.json();

        if (data.meals) {
          setMeals(data.meals);
        }
      } catch (err) {
        setError('Failed to load initial recipes. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialRecipes();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();

      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
        setError('No meals found. Try a different search term.');
      }
    } catch (err) {
      setError('Failed to search meals. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Search Recipes - Foody</title>
      </Head>

      <section className='category-content'>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10">
              {/* Search Header */}
              <div className="text-center mb-5">
                <h1 className="display-4 mb-3">Recipe Search</h1>
                <p className="lead text-muted">
                  {searchTerm ? 'Search results for your query' : 'Discover our delicious recipes'}
                </p>
              </div>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="mb-5">
                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for recipes... (e.g., pasta, chicken, soup)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    className=" btn btn-color"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* Loading State */}
              {loading && (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              {/* Results Grid */}
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {meals.map((meal) => (
                  <div key={meal.idMeal} className="col">
                          <Link
                            href={`/search/${meal.idMeal}`}>
                            <article className="position-relative rounded-3 overflow-hidden">
                              <Image width={600} height={200} src={meal.strMealThumb} className=' w-100 h-100 image' alt={meal.strMealThumb} />
                              <div className="one-category position-absolute text-center">
                                <h3 className="mx-2 text-light">{meal.strMeal}</h3>
                              </div>
                            </article>
                          </Link>
                        </div>
                ))}
              </div>


              {/* No Results Message */}
              {!loading && meals.length === 0 && (
                <div className="text-center py-5">
                  <h3 className="text-muted">No recipes found</h3>
                  <p>Try adjusting your search terms or browse our initial recipes.</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}