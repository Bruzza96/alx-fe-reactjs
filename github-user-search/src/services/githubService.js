import axios from "axios";

const SEARCH_URL = "https://api.github.com/search/users";

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  // Construct GitHub search query
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await axios.get(`${SEARCH_URL}?q=${encodeURIComponent(query)}`);
  const users = response.data.items || [];

  // Fetch detailed user info for each result
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const res = await axios.get(user.url);
      return res.data;
    })
  );

  return detailedUsers;
};
