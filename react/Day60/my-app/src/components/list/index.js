import React, { useState } from "react";
import style from "./list.module.css";

const List = () => {
  const [selectedUser, setUser] = useState(null);

  const onSelectUser = (user) => {
    setUser(user);
  };

  return (
    <section className={style.section}>
      <ul className={style.list}>
        {userList.map((user, index) => (
          <li
            key={user.name + index}
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
        ))}
      </ul>
      {selectedUser != null && (
        <div>
          <img src={selectedUser.image} />
          <p>{selectedUser.name}</p>
          <p>{selectedUser.age}</p>
          <p>{selectedUser.address}</p>
        </div>
      )}
    </section>
  );
};

const userList = [
  {
    name: "Utkarsh",
    age: 24,
    address: "Agra, UP",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    name: "Rushikesh",
    age: 23,
    address: "Mumbai, MH",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Satyam",
    age: 25,
    address: "Indore, MP",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Vijay",
    age: 18,
    address: "Gwalior, MP",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Sudheer",
    age: 26,
    address: "Rishikesh, UK",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

export default List;
