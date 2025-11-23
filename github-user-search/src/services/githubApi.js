import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY; // pulled from .env

export const getUser = async (username) => {
  try {
    const res = await axios.get(`${BASE_URL}${username}`, {
      headers: apiKey ? { Authorization: `token ${apiKey}` } : {},
    });

    return res.data;
  } catch (error) {
    console.error("GitHub API Error:", error);
    return null;
  }
};
