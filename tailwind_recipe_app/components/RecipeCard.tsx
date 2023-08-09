import { Recipe } from "@/data/recipe_mock";
import Image from "next/image";
import Link from "next/link";

interface Prop {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Prop) {
  return (
    <div className="relative bg-white shadow-md rounded-md w-max lg:w-max sm:w-64 transform hover:shadow-lg hover:scale-105 transition-transform duration-300 mb-8">
      {/* Recipe Image */}
      <div className="relative">
        <Image
          width={400}
          height={200}
          className="rounded-t-md transition-transform duration-300 transform hover:scale-100"
          src={recipe.imageURL}
          alt="Food Image"
        />
      </div>
      {/* Rating */}
      <p className="px-4 mt-3">
        <span className="text-[#E05D26] text-lg">
          ★★★★<span>☆</span>
        </span>
        <span className="text-xs font-light mx-2">(12 votes)</span>
      </p>
      {/* Recipe Details */}
      <div className="px-4">
        <h2 className="text-xl font-semibold">{recipe.title}</h2>
        <p className="mt-2 text-gray-600 max-w-[30ch]">
          {recipe.description.slice(0, 100)}
        </p>
      </div>
      {/* View Button */}
      <div className="px-3 py-5">
        <Link
          href={`/recipes/${recipe.id}`}
          className="border-2 border-[#E05D26] font-bold px-5 py-2 rounded bg-white text-[#E05D26] hover:scale-110 ease-in-out hover:bg-[#E05D26] hover:text-white transition duration-300"
        >
          View
        </Link>
      </div>
    </div>
  );
}
