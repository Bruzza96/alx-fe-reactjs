function UserProfile() {
  return (
    <div className="bg-gray-100 p-6 max-w-sm rounded-lg shadow-md text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="text-2xl font-bold mt-4">John Doe</h1>
      <p className="text-lg text-gray-700 mt-2">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;