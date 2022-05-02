import React, { useEffect } from "react";
import { Grid } from "./Products";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";


export const CategoryCard = () => {
  const { isLoading, isError, filterData } = useSelector((state) => state);
  const { pr} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterProducts(pr));
  }, [dispatch, pr]);

  return isLoading ? (
    <h1>processing</h1>
  ) : isError ? (
    <h1>err...</h1>
  ) : (

  
    // dispatch filter Products for every ID change


    <Grid data-testid = "category-container">
      
      {filterData.map((data) => {
        return <ProductCard key={data.id} {...data} />;
      })}
      {/* Iterate and print product cards that are of this category */}
    </Grid>
  );
};
