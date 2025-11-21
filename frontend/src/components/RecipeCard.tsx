"use client";

import Link from "next/link";
import { Recipe } from "@/data/recipes";

/**
 * PUBLIC_INTERFACE
 * Displays a compact card view of a recipe with an image and key tags.
 */
export default function RecipeCard({ recipe, onTag }: { recipe: Recipe; onTag?: (tag: string) => void }) {
  return (
    <article className="card-op overflow-hidden h-full flex flex-col">
      <Link href={`/recipes/${recipe.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-40 object-cover"
        />
      </Link>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg leading-tight mb-1">
          <Link href={`/recipes/${recipe.slug}`} className="no-underline hover:underline underline-offset-2">
            {recipe.title}
          </Link>
        </h3>
        <p className="text-muted text-sm line-clamp-2 mb-3">{recipe.description}</p>

        <div className="mt-auto flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => onTag?.(recipe.difficulty)}
            className="tag-op"
            aria-label={`Filter by ${recipe.difficulty}`}
          >
            {recipe.difficulty}
          </button>
          <button
            type="button"
            onClick={() => onTag?.(`${recipe.time}`)}
            className="tag-op"
            aria-label={`Filter by ${recipe.time} minutes`}
          >
            ⏱ {recipe.time}m
          </button>
          {recipe.vegan && (
            <button
              type="button"
              onClick={() => onTag?.("vegan")}
              className="tag-op"
              aria-label="Filter by vegan"
            >
              🌱 Vegan
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
