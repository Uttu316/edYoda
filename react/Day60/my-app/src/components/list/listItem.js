import React from "react";
import style from "./list.module.css";

const Listitem = (props) => {
  const { user, selectedUser, onSelectUser } = props;
  return (
    <li
      className={`${style.listItem}
          ${
            selectedUser != null &&
            selectedUser.id === user.id &&
            style.selectedItem
          }`}
      onClick={() => onSelectUser(user)}
    >
      <span>
        {user.firstName} {user.lastName}
      </span>
    </li>
  );
};

export default Listitem;
