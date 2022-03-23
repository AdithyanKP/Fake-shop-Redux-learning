import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);

  //mapping products
  const renderList = products.map((product) => {
    //destructuring inside properties of a single product
    const { id, title, price, image, category } = product;

    //return this
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link  cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  //returning what we returned in the above map function
  return <>{renderList}</>;
};

export default ProductComponent;
