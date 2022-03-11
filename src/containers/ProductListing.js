import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProduct } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(products);
  const fetchData = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")

      .catch((error) => {
        console.log(error);
      });
    console.log(response);
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
