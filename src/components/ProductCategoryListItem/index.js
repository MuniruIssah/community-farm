import React from "react";
import "./styles.scss";
const ProductCategoryListItem = ({ image, category }) => {
  return (
    <div className="productCategoryListItem">
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      <span>{category}</span>
    </div>
  );
};

export default ProductCategoryListItem;
