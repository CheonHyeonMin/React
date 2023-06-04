import React from "react";

const ProductItem = () => {
  /* 
    Mission!
    1. 누군가가 item을 선택했을 때, 해당 아이템에 대한 productDetail로 이동
        => 상품별로 고유번호 '/detail/1' ,'/detail/2' 이런식으로 이동
    
    */
  return (
    <div className="product-container">
      <img src="" width="100px" />
      <p>제품의 이름 : </p>
      <p>제품의 가격 : </p>
    </div>
  );
};

export default ProductItem;
