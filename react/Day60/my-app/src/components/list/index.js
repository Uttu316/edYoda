import React, { useState } from "react";
import SearchBar from "../searchbars";
import style from "./list.module.css";
import Listitem from "./listItem";

const List = () => {
  const [selectedUser, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(userList);

  const onSelectUser = (user) => {
    setUser(user);
  };
  const onSearchChange = (searchValue) => {
    setSearch(searchValue);

    if (searchValue === "") {
      setData(userList);
    } else {
      const newArray = userList.filter((i) =>
        i.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setData(newArray);
    }
  };

  return (
    <section className={style.section}>
      <SearchBar search={search} onSearchChange={onSearchChange} />

      <div className={style.usersInfo}>
        <ul className={style.list}>
          {data.map((user, index) => (
            <Listitem
              key={user.name + index}
              user={user}
              onSelectUser={onSelectUser}
              selectedUser={selectedUser}
            />
          ))}
        </ul>
        {selectedUser != null ? (
          <div>
            <img alt={selectedUser.name} src={selectedUser.image} />
            <p>{selectedUser.name}</p>
            <p>{selectedUser.age}</p>
            <p>{selectedUser.address}</p>
          </div>
        ) : (
          <h2>Select a user</h2>
        )}
      </div>
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
