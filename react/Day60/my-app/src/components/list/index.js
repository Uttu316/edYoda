import React, { useState } from "react";
import SearchBar from "../searchbars";
import style from "./list.module.css";
import Listitem from "./listItem";
import { data as userList } from "../../constants";

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
        i.firstName.toLowerCase().includes(searchValue.toLowerCase())
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
              key={user.id + index}
              user={user}
              onSelectUser={onSelectUser}
              selectedUser={selectedUser}
            />
          ))}
        </ul>
        {selectedUser != null ? (
          <div>
            <img alt={selectedUser.firstName} src={selectedUser.image} />
            <p>{selectedUser.firstName}</p>
            <p>{selectedUser.email}</p>
            <p>{selectedUser.phone}</p>
          </div>
        ) : (
          <h2>Select a user</h2>
        )}
      </div>
    </section>
  );
};

export default List;
