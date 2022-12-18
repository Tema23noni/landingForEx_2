import React from 'react'
import cl from './MakeMobile.module.scss';
import img from '../../img/project.png';
const MakeSite = () => {
  return (
    <div className={cl.MakeSite}>
        <div className={cl.image}><img src={img} alt="" /></div>
        <div className={cl.text}>
            <h3>Создание сайтов</h3>
            <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
        </div>
    </div>
  )
}

export default MakeSite