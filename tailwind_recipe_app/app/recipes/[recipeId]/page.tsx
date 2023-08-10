'use client';
// Import necessary dependencies
import { useParams } from "next/navigation";
import recipeMock from "@/data/recipe_mock";
import React from "react";
import Image from "next/image";

// Define the Recipe component
const Recipe: React.FC = () => {
  // Get the recipeId parameter from the URL
  const params = useParams();
  const recipeId = params.recipeId as string;

  // Find the recipe with the matching ID from the mock data
  const recipe = recipeMock.find((recipe) => recipe.id === Number(recipeId));

  // If the recipe is not found, display a message
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  // Render the recipe details
  return (
    <div className="lg:max-w-screen-xl sm:max-w-screen-sm mx-auto py-8 sm:px-0 px-3">
      <div className="flex flex-col md:flex-col md:space-x-8">
        <div className="relative h-max max-h-[35vh] overflow-hidden rounded-lg">
          {/* Display the cover image */}
          <Image
            src={recipe.coverImage}
            alt={recipe.title}
            className="w-full h-full object-fit rounded-lg shadow-md relative before:absolute before:bg-[#1e1e1e] before:top-0 before:left-0 before:w-full before:h-full"
            width={500}
            height={300}
          />
        </div>
        <div className="md:px-0 px-3 py-3">
          {/* Display the recipe title and description */}
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-xl text-gray-700 mb-4">{recipe.description}</p>
          <div className="flex space-x-4 mb-4">
            {/* Display servings and total time */}
            <div className="flex items-center">
              {/* Servings icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-gray-500 mr-2"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2l-5.5 9h11z" />
                <circle cx="17.5" cy="17.5" r="4.5" />
                <path d="M3 13.5h8v8H3z" />
              </svg>
              <span className="text-gray-700">{recipe.servings} servings</span>
            </div>
            {/* Display total time */}
            <div className="flex items-center">
              {/* Time icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-gray-500 mr-2"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2l-5.5 9h11z" />
                <circle cx="17.5" cy="17.5" r="4.5" />
                <path d="M3 13.5h8v8H3z" />
              </svg>
              <span className="text-gray-700">{recipe.totalTime} minutes</span>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-2 block">
            {/* Display list of ingredients */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
              <ul className="list-disc pl-4">
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
            {/* Display list of instructions */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Instructions</h2>
              <ol className="list-decimal pl-4">
                {recipe.instructions.map((instruction, i) => (
                  <li key={i}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Recipe component
export default Recipe;
