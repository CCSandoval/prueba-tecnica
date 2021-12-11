import React from "react";

const UserCard = ({ userData }) => {
  return (
    <div className="flex my-2 w-11/12 rounded-lg border-b border-l p-2">
      <img src={userData.avatar} alt="User" className="rounded-full" />
      <div className="flex flex-col justify-around p-2 ml-3 items-end w-full">
        <h1 className="text-2xl text-white font-extrabold">
          {userData.first_name} {userData.last_name}
        </h1>
        <h1 className="text-2xl text-white font-extrabold">
          {userData.email}
        </h1>
      </div>
    </div>
  );
};

export default UserCard;
