import React from "react";

export const User = (props) => {
  return (
    <div className="user__card">
      <div className="user__subject">
        <strong>FirstName:</strong> {props.first}
      </div>
      <div className="user__subject">
        <strong>LastName:</strong> {props.last}
      </div>
    </div>
  );
};

export default User;
