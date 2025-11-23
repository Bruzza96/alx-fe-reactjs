import axios from "axios";

// Fetch a single user by username (basic search)
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced search: search users by query (username, location, repos, etc.)
export const searchUsers = async (query) => {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );
  return response.data.items; // GitHub Search API returns { total_count, items: [] }
};
