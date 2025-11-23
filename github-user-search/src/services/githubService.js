import axios from "axios";

/**
 * Advanced GitHub user search
 * @param {string} username - GitHub username
 * @param {string} location - User location
 * @param {number} minRepos - Minimum number of public repositories
 */
export const searchUsers = async ({ username = "", location = "", minRepos = 0 }) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`
  );

  return response.data.items; // GitHub Search API returns { total_count, items: [] }
};
