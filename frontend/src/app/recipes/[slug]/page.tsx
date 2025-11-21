import { notFound } from "next/navigation";
import Link from "next/link";
import { getRecipeBySlug, getAllRecipes } from "@/data/recipes";

/**
 * PUBLIC_INTERFACE
 * Recipe detail page
 * Displays the full information for a recipe given its slug.
 */
type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // PUBLIC_INTERFACE
  // Provide static params for all recipes so the dynamic route can be exported.
  return getAllRecipes().map((r) => ({ slug: r.slug }));
}

export default async function RecipeDetailPage(props: PageProps) {
  const { slug } = await props.params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return notFound();

  return (
    <div className="container-op py-8 md:py-12">
      <nav className="mb-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-muted">
          <li><Link className="link-op" href="/">Home</Link></li>
          <li aria-hidden>›</li>
          <li className="font-medium text-black">{recipe.title}</li>
        </ol>
      </nav>

      <article className="grid md:grid-cols-2 gap-6 items-start">
        <div className="card-op overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <div className="card-op p-5">
          <header className="mb-4">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
              {recipe.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              <span className="tag-op" aria-label={`Difficulty ${recipe.difficulty}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M12 2l4 7h-8l4-7zm0 20l-4-7h8l-4 7z"/></svg>
                {recipe.difficulty}
              </span>
              <span className="tag-op" aria-label={`Ready in ${recipe.time} minutes`}>
                ⏱ {recipe.time}m
              </span>
              {recipe.vegan && <span className="tag-op" aria-label="Vegan">🌱 Vegan</span>}
            </div>
          </header>

          <p className="text-muted mb-4">{recipe.description}</p>

          <div className="grid md:grid-cols-2 gap-4">
            <section aria-labelledby="ingredients-title" className="card-op p-4">
              <h2 id="ingredients-title" className="font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc ms-5 space-y-1">
                {recipe.ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="steps-title" className="card-op p-4">
              <h2 id="steps-title" className="font-semibold mb-2">Steps</h2>
              <ol className="list-decimal ms-5 space-y-1">
                {recipe.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>
          </div>

          <div className="mt-4">
            <Link href="/" className="btn-op btn-secondary" aria-label="Back to recipes">
              ← Back to recipes
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
