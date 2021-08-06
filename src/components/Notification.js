// import requirements
import React from "react";

// create function to alert user that they have already entered the current letter
const Notification = ({ showNotification }) => {
  return (
    // <!-- Notification -->
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

// export default element
export default Notification;
