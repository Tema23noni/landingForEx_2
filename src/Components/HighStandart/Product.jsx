import React from 'react';
import img from '../../img/web-programming.png';
import cl from './HighStandart.module.scss'
const Product = ({id}) => {
    return (
      <div className={cl.Product} id={cl[`prod${id}`]}>  
        <div className={cl.product__numbers}>
          <img src={img} alt="" />
          <p>125</p>
        </div>
        <div className={cl.product__text}>Our projects</div>
      </div>
    )
  }
  
  export default Product