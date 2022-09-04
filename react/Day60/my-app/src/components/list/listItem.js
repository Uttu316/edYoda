import React from "react";
import style from "./list.module.css";

const Listitem = (props) => {
  const { user, selectedUser, onSelectUser } = props;
  return (
    <li
      className={`${style.listItem}
          ${
            selectedUser != null &&
            selectedUser.name === user.name &&
            style.selectedItem
          }`}
      onClick={() => onSelectUser(user)}
    >
      <span>{user.name}</span>
      <span>{user.age}</span>
    </li>
  );
};

export default Listitem;
