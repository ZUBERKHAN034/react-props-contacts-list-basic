import React from "react";

function Card(props) {
  const { name, img, phone, email } = props;
  return (
    <>
      <h2>{name}</h2>
      <img src={img} alt="avatar_img" />
      <p>{phone}</p>
      <p>{email}</p>
    </>
  );
}

export default Card;
