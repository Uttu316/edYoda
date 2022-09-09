import React, { useState } from "react";

const style = {
  padding: 8,
};
const Form = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    comment: "",
  });

  const setForm = (e) => {
    const { name, value } = e.target;
    const newObj = { ...user, [name]: value };
    setUser(newObj);
  };

  return (
    <div>
      <input
        style={style}
        value={user.name}
        name="name"
        placeholder="Name"
        onChange={setForm}
      />
      <input
        style={style}
        value={user.age}
        name="age"
        placeholder="Age"
        onChange={setForm}
      />
      <input
        value={user.email}
        style={style}
        name="email"
        placeholder="Email"
        onChange={setForm}
      />
      <input
        value={user.phone}
        style={style}
        name="phone"
        placeholder="Phone"
        onChange={setForm}
      />
      <ChildForm setUser={setUser} />
    </div>
  );
};

const ChildForm = ({ setUser }) => {
  const [comment, setComment] = useState("");
  return (
    <div>
      <textarea
        placeholder="Commment here..."
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);

          setUser((user) => ({ ...user, comment: e.target.value }));
        }}
      />
    </div>
  );
};

export default Form;
