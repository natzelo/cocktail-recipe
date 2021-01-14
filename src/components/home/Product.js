import React from "react";
import { BiShoppingBag, BiHeart } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import Fade from "react-reveal/Fade";
function Product(props) {
  return (
    <Fade bottom>
      <div className="product">
        <div className="img-wrapper">
          <img src={`images/prod-${props.image}.jpg`} alt="" />
          <div className="overlay">
            <BiShoppingBag color="#fff" size="40px" />
            <BiHeart color="#fff" size="40px" />
            <BsEye color="#fff" size="40px" />
          </div>
        </div>
        <p className="kind">{props.kind}</p>
        <p className="name">{props.name}</p>
        <p className="price">{props.price}</p>
      </div>
    </Fade>
  );
}

export default Product;
