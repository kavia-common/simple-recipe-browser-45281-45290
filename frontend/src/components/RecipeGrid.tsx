"use client";

import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/data/recipes";
import { useMemo, useState, useEffect } from "react";

/**
 * PUBLIC_INTERFACE
 * Displays a grid of recipes with client-side search state read from URL.
 */
export default function RecipeGrid({ initialItems }: { initialItems: Recipe[] }) {
  const [query, setQuery] = useState<string>("");

  // Initialize from URL query (?q=...)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    setQuery(q);
  }, []);

  // Reflect state back to URL (without reload)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (query) params.set("q", query);
    else params.delete("q");
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [query]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return initialItems;
    return initialItems.filter((r) => {
      return (
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.ingredients.join(" ").toLowerCase().includes(q)
      );
    });
  }, [initialItems, query]);

  return (
    <div>
      <div className="sr-only" aria-live="polite" aria-atomic>
        {query ? `${filtered.length} recipes found for ${query}` : `${filtered.length} recipes`}
      </div>
      {filtered.length === 0 ? (
        <p className="text-muted">No recipes match your search. Try a different term.</p>
      ) : (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((recipe) => (
            <li key={recipe.slug}>
              <RecipeCard recipe={recipe} onTag={(t) => setQuery(t)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
