"use client";
import Hero from "@/components/Hero";
import PopularList from "@/components/PopularList";
import recipe_mock from "@/data/recipe_mock";
import React from "react";

const LandingPage: React.FC = () => {
  const [recipes, setRecipes] = React.useState(recipe_mock);

  return (
    <main className="bg-gray-100">
      <div className="bg-gray-100 relative">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PopularList recipes={recipes} />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;