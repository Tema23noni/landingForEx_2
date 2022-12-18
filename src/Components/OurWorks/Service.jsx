import React from 'react'
import cl from './OurWorks.module.scss';
import img from '../../img/people.png'
const Service = ({num}) => {
  return (
    <div className={cl.Service}>
      <img src={img} alt="" />
      <div className={cl.Service__text}>
        <h3><span>{num}.</span> Исследование и упаковка</h3>
        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
        <a href="#">Подробнее</a>
      </div>
    </div>
  )
}

export default Service