import React, { useState, useEffect } from "react";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

  setRecipes(recipesData);
  }, []);

  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Recipe Sharing Platform</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
            />

            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-3">{recipe.summary}</p>

            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
