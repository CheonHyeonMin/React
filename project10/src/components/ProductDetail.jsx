import React from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
const ProductDetail = () => {

    let {num} = useParams();
    console.log('num',num);

    //axios를 통해서 한가지 상품에 대한 정보만 가지고 올 것
    // 'http://172.30.1.45:8090/shop/' => 'http://172.30.1.45:8090/shop/p5' 가져오기

    const [list, setList] = useState([]);
    useEffect(()=>{
        axios.get(`http://172.30.1.45:8090/shop/${num}`)
        .then((res)=>{
            setList(res.data.product)
        })
    },[])
  return (
    <div>
        
        <img src={"data:image/;base64,"+list.img} alt="" />
        <p>{list.price}</p>
    </div>
  )
}

export default ProductDetail