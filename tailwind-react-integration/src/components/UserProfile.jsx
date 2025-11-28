function UserProfile() {
  return (
    <div className="mx-auto bg-white shadow-lg rounded-2xl sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm">
      <div className="flex flex-col items-center text-center">
        
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300">
        John Doe
        </h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  </div>
  );
}

export default UserProfile;