import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ item }) => {
  /* 
  useParams()
  -url 의 파라미터 정보를 가져올 수 있는 React Hook
  -보통 물품의 교유한 ID값을 설정하는데 적합하다.
  -한가지 정보만 사용 가능

  a.<Route path="/경로이름:파라미터정보"><Route>
  b. 경로에 해당하는 컴포넌트
    1) import useParams from ~~
    2) let {파라미더정보} = useParams()
  */

  return <div></div>;
};

export default ProductDetail;
