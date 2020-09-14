import React from "react";
var classNames = require("classnames");

const Notification = ({ error, success }) => {
  if (error === null && success === null) {
    return null;
  }

  return (
    <div className={classNames("notification", { error, success })}>
      {error ? error : success}
    </div>
  );
};

export default Notification;
