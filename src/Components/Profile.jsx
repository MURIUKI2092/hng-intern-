import React from "react";
import profilePic from "../images/jackson.png"

const Profile = () => {
  return (
    <div className="main__content">
      <img src={profilePic} id="profile__img" className="profile" alt="jackson otieno" />
      <h1 id="twitter">Jackson otieno</h1>
      <h1 id="slack" className="hidden">jaseric</h1>
    </div>
  );
};

export default Profile;