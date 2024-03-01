import React from "react";
import { useState } from "react";
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrapper/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    location: user?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.location) {
      toast.error("Please Fill out all fields");
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
            labelText="Name"
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
            labelText="Email"
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
            labelText="Location"
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "please Wait..." : "save Changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
