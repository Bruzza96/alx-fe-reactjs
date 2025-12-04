import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  // Validation
    const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Enter at least 2 ingredients, separated by commas";

    if (!instructions.trim())
      newErrors.instructions = "Preparation steps are required";

    setErrors(newErrors);

    // If no errors, submit form (here we just log it)
    if (Object.keys(newErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        instructions: instructions.split("\n").map((i) => i.trim()),
      };
      console.log("New Recipe Submitted:", newRecipe);

      // Reset form
      setTitle("");
      setIngredients("");
      setInstructions("");
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className={`w-full p-2 border rounded ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-semibold mb-1">Preparation Steps (line by line)</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="5"
            className={`w-full p-2 border rounded ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
