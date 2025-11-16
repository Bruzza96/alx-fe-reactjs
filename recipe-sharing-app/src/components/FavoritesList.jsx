import { useRecipeStore } from "./recipeStore";
import { useEffect } from "react";

const RecommendationsList = () => {
  const recipes = useRecipeStore((state) => state.recipes || []);
  const recommendations = useRecipeStore((state) =>
    state.recommendations || []
  );
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Only generate recommendations once on mount
  useEffect(() => {
    if (recipes.length > 0) {
      generateRecommendations();
    }
  }, [recipes, generateRecommendations]);

  if (!recommendations || recommendations.length === 0)
    return <p>No recommendations yet. Add favorites to get suggestions!</p>;

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            margin: "8px 0",
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
