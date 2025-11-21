"use client";

import { useEffect, useState } from "react";

/**
 * PUBLIC_INTERFACE
 * SearchBar manages its text and syncs with the URL (?q=) for shareable searches.
 */
export default function SearchBar() {
  const [value, setValue] = useState("");

  // Initialize input from URL query parameter
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    setValue(q);
  }, []);

  const updateUrl = (next: string) => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (next) params.set("q", next);
    else params.delete("q");
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
    // Let RecipeGrid detect via its own effect or we could dispatch a custom event if needed
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <form
      role="search"
      aria-label="Recipe search"
      className="flex items-stretch gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        updateUrl(value);
      }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl border w-full"
        style={{ borderColor: "rgba(2,6,23,0.12)", background: "white", boxShadow: "var(--shadow-sm)" }}
      >
        <span aria-hidden className="text-muted">🔎</span>
        <label htmlFor="q" className="visually-hidden">Search recipes</label>
        <input
          id="q"
          name="q"
          type="search"
          autoComplete="off"
          placeholder="Search recipes, e.g. pasta, chicken, vegan..."
          className="w-full bg-transparent outline-none placeholder:text-gray-400"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-op btn-primary" aria-label="Search">
        Search
      </button>
    </form>
  );
}
