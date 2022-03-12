import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  selectedProduct,
} from "../redux/actions/productActions";
import axios from "axios";
const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  console.log(product);
  const { image, title, price, category, description } = product;
  console.log(title);
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(productId);

  const fetchData = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)

      .catch((error) => {
        console.log(error);
      });
    console.log(response);
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchData(productId);
    return () => {
      dispatch(removeProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
