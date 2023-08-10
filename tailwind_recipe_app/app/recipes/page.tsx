"use client";
// Import necessary components and data
import RecipeCard from "@/components/RecipeCard";
import recipe_mock, { Recipe } from "@/data/recipe_mock";
import React from "react";

// Define the LandingPage component
const LandingPage: React.FC = () => {
  // Initialize state to hold recipe data
  const [recipes, setRecipes] = React.useState<Recipe[]>(recipe_mock);

  // Render the LandingPage component
  return (
    <main className="bg-gray-100">
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Display a grid of RecipeCard components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recipes.map((recipe, index) => (
              // Render a RecipeCard component for each recipe
              <RecipeCard recipe={recipe} key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

// Export the LandingPage component
export default LandingPage;
