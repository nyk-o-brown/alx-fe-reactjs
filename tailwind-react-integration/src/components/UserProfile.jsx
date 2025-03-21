function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 sm:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-36 sm:h-36 mx-auto"
      />
      <h1 className="sm:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="sm:text-sm md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;