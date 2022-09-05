import React from "react";

const List = (props) => {
  const { heading, list = [], id } = props;

  return (
    <div className="location">
      <h1 id={id}>{heading}</h1>
      <div className="box">
        {list.map((i, index) => (
          <a href="" key={i.id + index}>
            <img src={i.image} alt={i.id} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default List;
