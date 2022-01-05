import React from "react";
import ProductCategoryListItem from "../../../../components/ProductCategoryListItem";
import "./styles.scss";
const ProductScrollList = ({
  list = [
    { category: "All Products" },
    { category: "Vegetables" },
    { category: "Fruits" },
    { category: "Flowers" },
    { category: "Staples" },
    { category: "Food Products" },
    { category: "Poultry" },
    { category: "Personal Care" },
    { category: "Fish" },
    { category: "Meat" },
    
  ],
}) => {
  return (
    <div className="productScrollList">
      {list.map((item, index) => (
        <ProductCategoryListItem {...item} key={index} />
      ))}
    </div>
  );
};

export default ProductScrollList;
