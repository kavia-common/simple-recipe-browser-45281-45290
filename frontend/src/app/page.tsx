import RecipeGrid from "@/components/RecipeGrid";
import SearchBar from "@/components/SearchBar";
import { getAllRecipes } from "@/data/recipes";
import { Suspense } from "react";

/**
 * Home page: shows search bar and a grid of recipe cards.
 * Uses static mock data for now.
 */
export default function Home() {
  const recipes = getAllRecipes();

  return (
    <div className="container-op py-8 md:py-12">
      <section className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
          Discover your next favorite recipe
        </h1>
        <p className="text-muted">
          Search and browse curated dishes with a clean, modern interface.
        </p>
      </section>

      <section className="card-op p-4 md:p-5 mb-6 md:mb-8">
        <SearchBar />
      </section>

      <section id="recipes" aria-label="Recipe results">
        <Suspense fallback={<p className="text-muted">Loading recipes...</p>}>
          <RecipeGrid initialItems={recipes} />
        </Suspense>
      </section>
    </div>
  );
}
