'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import  './Recipe.css';

export default function RecipeDetails() {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.meals && data.meals[0]) {
          setRecipe(data.meals[0]);
        } else {
          setError('Recipe not found');
        }
      } catch (err) {
        setError('Failed to load recipe');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRecipe();
    }
  }, [id]);
  
  // Helper function to get ingredients and measurements
  const getIngredients = (recipe) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  if (loading) {
    return (
      <div className="container mt-5 pt-5">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5 pt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
        <Link href="/search" className="btn btn-primary">
          Back to Search
        </Link>
      </div>
    );
  }

  if (!recipe) return null;

  const ingredients = getIngredients(recipe);

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {/* Recipe Header */}
        <div className="col-12 mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/search">Recipes</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {recipe.strMeal}
              </li>
            </ol>
          </nav>
        </div>

        {/* Recipe Image and Quick Info */}
        <div className="col-md-6 mb-4">
          <div className="position-relative rounded shadow-sm" style={{ height: '400px' }}>
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              fill
              className="object-fit-cover rounded"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="mt-4">
            <div className="d-flex gap-3 flex-wrap">
              <span className="badge bg-primary fs-6">{recipe.strCategory}</span>
              <span className="badge bg-secondary fs-6">{recipe.strArea}</span>
              {recipe.strTags && recipe.strTags.split(',').map(tag => (
                <span key={tag} className="badge bg-info fs-6">{tag.trim()}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Recipe Details */}
        <div className="col-md-6 mb-4">
          <h1 className="display-5 mb-4">{recipe.strMeal}</h1>
          
          {/* Watch Video Button */}
          {recipe.strYoutube && (
            <a 
              href={recipe.strYoutube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-danger mb-4"
            >
              <i className="bi bi-youtube me-2"></i>
              Watch Video Tutorial
            </a>
          )}

          {/* Ingredients */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Ingredients</h3>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {ingredients.map(({ ingredient, measure }, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{ingredient}</span>
                    <span className="badge bg-light text-dark">{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Instructions</h3>
            </div>
            <div className="card-body">
              {recipe.strInstructions.split('\r\n').map((instruction, index) => (
                instruction.trim() && (
                  <p key={index} className="mb-3">
                    <span className="fw-bold me-2">{index + 1}.</span>
                    {instruction.trim()}
                  </p>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Source Link */}
        {recipe.strSource && (
          <div className="col-12 mb-4">
            <div className="alert alert-info">
              <i className="bi bi-link-45deg me-2"></i>
              Original Recipe: 
              <a 
                href={recipe.strSource} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ms-2 alert-link"
              >
                View Source
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}