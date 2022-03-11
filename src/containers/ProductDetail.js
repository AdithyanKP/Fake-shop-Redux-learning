import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import axios from "axios";
const ProductDetail = () => {
  const product = useSelector((state) => state.singleProduct);
  console.log(product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(productId);

  const fetchData = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)

      .catch((error) => {
        console.log(error);
      });
    console.log(response);
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchData();
    }
  }, [productId]);

  return <div>ProductDetail</div>;
};

export default ProductDetail;
