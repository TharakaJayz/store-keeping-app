import React from "react";
import "./ProductCard.css";
import axios from "axios";

const ProductCard = (props) => {
  const deleteBtnHandler = async () => {
    const id = props.id;
    try {
      const response = await axios.delete(
        `https://dummyjson.com/products/${id}`
      );
      console.log("Resource deleted:", response.data);
      window.location.reload();
      // Handle any additional logic, such as updating the UI
    } catch (error) {
      console.error("Error deleting resource:", error);
      // Handle the error, e.g., display an error message
    }
  };

  return (
    <div className="productCard_main">
      <section className="PC_sec_1">
        <h2> {props.title}</h2>
        <h3> {props.brand}</h3>
        <h4> {props.price}</h4>
        <p> {props.desc}</p>
        <span> {props.rating}</span>
      </section>
      <section className="PC_sec_2">
        <img src={props.imgSrc} alt="product" className="PC_sec2_img" />

        <button onClick={deleteBtnHandler}> Delete</button>
      </section>
    </div>
  );
};

export default ProductCard;
