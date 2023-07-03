import React, { useState } from "react";

function Item({ name, category }) {
  const [addItem, setAddItem] = useState(false);
  function handleClick() {
    setAddItem((addItem) => !addItem);
  }
  const isInCart = addItem ? "in-cart" : "";
  const cartText = addItem ? "Remove from Cart" : "Add to Cart";
  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartText}</button>
    </li>
  );
}

export default Item;
