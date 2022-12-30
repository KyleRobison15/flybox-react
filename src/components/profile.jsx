import React from "react";
const Profile = ({ user }) => {
  if (user) {
    return (
      <div className="container">
        <h1 className="display-1">Profile for: {user.username}</h1>
      </div>
    );
  }
};

export default Profile;
