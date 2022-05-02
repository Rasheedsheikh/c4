import React, { useEffect, useState } from "react";
import { Select } from "./Styled";
import { Grid } from "./Styled";
import {useDispatch ,useSelector} from "react-redux";
import { getProductsData, sortProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";


export const Products = () => {
  const { isLoading, isError, products } = useSelector((state) => state);
  // const getData= async ()=>{
  //   try{
  //     let res=await fetch(`https://movie-fake-server.herokuapp.com/products`)
  //     let data=await res.json();
  //     console.log(data)
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }
  // 
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    getProductsData(dispatch);
  }, []);
  
  const handleSort = (e) => {
    dispatch(sortProducts(e.target.value));
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      {isLoading ? (
        <h1>Processing</h1>
      ) : isError ? (
        <h1>err..</h1>
      ) : (
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {products.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
 
      </Grid>
      )}
    </>
  );
};
