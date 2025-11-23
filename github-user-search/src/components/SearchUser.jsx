import { useState } from "react";
import { getUser } from "../services/githubApi";

const SearchUser = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    const data = await getUser(username);
    setUserData(data);
  };

  return (
    <div>
      <h2>GitHub User Search</h2>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div>
          <h3>{userData.login}</h3>
          <img src={userData.avatar_url} width="100" />
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default SearchUser;
