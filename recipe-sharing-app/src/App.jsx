import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

// Wrapper to extract ID from URL
import { useParams } from "react-router-dom";
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>

        {/* Add new recipes */}
        <AddRecipeForm />

        {/* Search recipes */}
        <SearchBar />

        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>

        {/* Favorites & Recommendations */}
        <FavoritesList />
        <RecommendationsList />
      </div>
    </Router>
  );
}

export default App;
