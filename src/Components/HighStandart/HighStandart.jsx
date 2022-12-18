import React from 'react'
import Product from './Product.jsx';
import cl from './HighStandart.module.scss';
import img from '../../img/Rectangle2.png'
const HighStandart = () => {
    let arr = [1,2,3,4,5]
  return (
    <div className={cl.HighStandart}>
        <div className='cont'>
            <div className={cl.HighStandart__content}>
                <div className={cl.HighStandart__main}>
                    <div className={cl.text}>
                        <h3>Высокие стандарты разработки</h3>
                        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.  стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                        <a href="#">Подробнее о компании</a>
                    </div>
                    <div className={cl.image}></div>
                </div>
                <div className={cl.line}></div>
                <div className={cl.Products}>
                    {
                        arr.map(e =>{
                            return <Product id={e} key={e}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default HighStandart