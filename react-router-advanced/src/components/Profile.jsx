import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      {/* This is where nested routes will render their components */}
      <Outlet />
    </div>
  );
};

export default Profile;
