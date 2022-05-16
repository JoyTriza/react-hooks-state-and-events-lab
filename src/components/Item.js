import React, {useState} from "react";

  function Item({ name, category }) {
  const [cart, setCart] = useState(false)

  function handleCart(){
    setCart (cart => cart !==true)
  }

  const shoppingList = cart ? cart : ""
  const inText = cart ? "Remove" : "Add"
  return (
    <li className={"shoppingList"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{inText}</button>
    </li>
  );
}

export default Item;
