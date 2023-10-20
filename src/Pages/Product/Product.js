import React, { useEffect, useState } from "react";
import "./Product.css";
import ProductCard from "../../Components/ProductCard";
import axios from "axios";

const Product = () => {
  // let productList = [];
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await axios.get("https://dummyjson.com/products");
        // productList = products.data.products;
        setProductList(products.data.products);
        // console.log(products.data.products);
      } catch (err) {
        console.log("error occured when fetching posts");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product_main">
      <section className="PM_sec sec-1">
        <button> + ADD</button>
      </section>
      <section className="PM_sec sec-2">
        {productList.map((singleProduct) => {
          return (
            <div key={singleProduct.id}>
              <ProductCard
                title={singleProduct.title}
                brand={singleProduct.brand}
                price={singleProduct.price}
                desc={singleProduct.description}
                rating={singleProduct.rating}
                imgSrc={singleProduct.thumbnail}
                id={singleProduct.id}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Product;
