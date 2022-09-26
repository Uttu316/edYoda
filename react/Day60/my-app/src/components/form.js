import React, { useEffect, useRef, useState } from "react";

const style = {
  padding: 8,
};
const Form = (props) => {
  const ref = useRef();
  const emailRef = useRef();
  const valueRef = useRef(0);
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
  useEffect(() => {
    if (ref.current) {
      ref.current.style.backgroundColor = "red";
      emailRef.current.style.backgroundColor = "green";
    }
  }, [ref.current, emailRef.current]);
  return (
    <div>
      <input
        style={style}
        value={user.name}
        name="name"
        placeholder="Name"
        onChange={setForm}
        ref={ref}
        onBlur={() => (valueRef.current += 2)}
      />
      <input
        style={style}
        value={user.age}
        name="age"
        placeholder="Age"
        onChange={setForm}
        onBlur={() => (valueRef.current += 2)}
      />
      <input
        value={user.email}
        style={style}
        name="email"
        placeholder="Email"
        onChange={setForm}
        ref={emailRef}
        onBlur={() => (valueRef.current += 2)}
      />
      <input
        value={user.phone}
        style={style}
        name="phone"
        placeholder="Phone"
        onChange={setForm}
        onBlur={() => (valueRef.current += 2)}
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
