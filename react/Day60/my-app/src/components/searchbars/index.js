import React, { useState } from "react";
import styles from "./searchbar.module.css";

const SearchBar = (props) => {
  const { search, onSearchChange } = props;
  const onChangeSearch = (e) => {
    const value = e.target.value;
    onSearchChange(value);
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Search usernamme"
        value={search}
        onChange={onChangeSearch}
      />
    </div>
  );
};

export default SearchBar;
