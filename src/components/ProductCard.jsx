import { Flex } from "./Styled";

export const ProductCard =  ({ title, id, brand, image, price, category }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={id}>
        {/* display item info here  */}
        <img src={image}  />


        <h2>{title}</h2>
       
        <h2>{brand}</h2>
<h4>{category}</h4>
        <h4>Price:{price}</h4>
        
      </Flex>
    </>
  );
};
