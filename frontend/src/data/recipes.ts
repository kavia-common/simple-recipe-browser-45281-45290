export type Recipe = {
  slug: string;
  title: string;
  description: string;
  image: string;
  time: number; // minutes
  difficulty: "Easy" | "Medium" | "Hard";
  vegan?: boolean;
  ingredients: string[];
  steps: string[];
};

/**
 * PUBLIC_INTERFACE
 * Returns a list of available recipes (mocked in-memory).
 */
export function getAllRecipes(): Recipe[] {
  const base =
    process.env.NEXT_PUBLIC_FRONTEND_URL ||
    process.env.NEXT_PUBLIC_API_BASE ||
    "";

  // For static export compatibility, use relative images living in /public if provided.
  // Since we don't have actual images, use placeholder URLs.
  const img = () =>
    `${base || ""}https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop`;

  return SAMPLE_RECIPES.map((r) => ({ ...r, image: r.image || img() }));
}

/**
 * PUBLIC_INTERFACE
 * Find a recipe by its slug.
 */
export function getRecipeBySlug(slug: string): Recipe | undefined {
  return getAllRecipes().find((r) => r.slug === slug);
}

const SAMPLE_RECIPES: Recipe[] = [
  {
    slug: "lemon-herb-chicken",
    title: "Lemon Herb Chicken",
    description:
      "Juicy chicken marinated in lemon, garlic, and fresh herbs, then roasted to perfection.",
    image: "",
    time: 45,
    difficulty: "Medium",
    ingredients: [
      "4 chicken thighs",
      "2 lemons",
      "3 cloves garlic",
      "2 tbsp olive oil",
      "Fresh rosemary",
      "Fresh thyme",
      "Salt & pepper",
    ],
    steps: [
      "Preheat oven to 200°C (400°F).",
      "Mix lemon juice, zest, minced garlic, olive oil, and chopped herbs.",
      "Season chicken and marinate for 20 minutes.",
      "Roast for 25–30 minutes until golden and cooked through.",
    ],
  },
  {
    slug: "creamy-garlic-pasta",
    title: "Creamy Garlic Pasta",
    description:
      "Velvety pasta tossed in a rich garlic cream sauce with parmesan and cracked pepper.",
    image: "",
    time: 20,
    difficulty: "Easy",
    ingredients: [
      "200g pasta",
      "3 cloves garlic",
      "1 cup cream",
      "1/2 cup parmesan",
      "Butter",
      "Salt & pepper",
    ],
    steps: [
      "Cook pasta until al dente.",
      "Sauté minced garlic in butter until fragrant.",
      "Add cream and simmer, then stir in parmesan.",
      "Toss pasta with sauce, season, and serve.",
    ],
  },
  {
    slug: "vegan-buddha-bowl",
    title: "Vegan Buddha Bowl",
    description:
      "Colorful bowl with quinoa, roasted chickpeas, fresh veggies, and a tangy tahini dressing.",
    image: "",
    time: 25,
    difficulty: "Easy",
    vegan: true,
    ingredients: [
      "1 cup quinoa",
      "1 can chickpeas",
      "Mixed greens",
      "Cherry tomatoes",
      "Cucumber",
      "Tahini",
      "Lemon",
      "Paprika, cumin, salt",
    ],
    steps: [
      "Cook quinoa as per package directions.",
      "Roast drained chickpeas with spices until crisp.",
      "Prepare chopped veggies and whisk tahini with lemon.",
      "Assemble bowl: greens, quinoa, chickpeas, veggies, drizzle dressing.",
    ],
  },
  {
    slug: "beef-stir-fry",
    title: "Quick Beef Stir-Fry",
    description:
      "Tender beef with crisp vegetables in a savory sauce, ready in minutes.",
    image: "",
    time: 15,
    difficulty: "Easy",
    ingredients: [
      "250g beef strips",
      "Broccoli florets",
      "Bell pepper",
      "Soy sauce",
      "Ginger & garlic",
      "Sesame oil",
    ],
    steps: [
      "Sear beef quickly in hot oil and set aside.",
      "Stir-fry vegetables until tender-crisp.",
      "Add beef back with soy, ginger, garlic, and a splash of water.",
      "Finish with sesame oil.",
    ],
  },
  {
    slug: "chocolate-lava-cake",
    title: "Chocolate Lava Cake",
    description:
      "Indulgent dessert with a rich, molten center – a showstopper for any dinner.",
    image: "",
    time: 30,
    difficulty: "Hard",
    ingredients: [
      "Dark chocolate",
      "Butter",
      "Eggs",
      "Sugar",
      "Flour",
      "Cocoa powder",
    ],
    steps: [
      "Melt chocolate with butter.",
      "Whisk eggs and sugar until pale.",
      "Fold in melted chocolate and flour.",
      "Bake briefly until edges set and center is gooey.",
    ],
  },
];
