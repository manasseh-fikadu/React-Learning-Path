"use client";
import RecipeCard from "@/components/RecipeCard";
import recipe_mock, { Recipe } from "@/data/recipe_mock";
import Image from "next/image";
import React from "react";

const LandingPage: React.FC = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>(recipe_mock);

  return (
    <main className="bg-gray-100">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recipes.map((recipe, index) => (
              <RecipeCard recipe={recipe} key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
