import React from 'react'
import Button from '../../UI/Button/Button';
import cl from './OurWorks.module.scss';
import Service from './Service';
const OurWorks = () => {
    let count = [1,2,3]
  return (
    <div className={cl.OurWorks}>
        <div className={cl.color}></div>
        <div className='cont'>
            <div className={cl.OurWorks__content}>
                <div className={cl.OurWorks__text}>
                    <h3>Наши работы, на которых мы специализируемся</h3>
                    <div className={cl.btn}><Button>Наши проекты</Button></div>
                </div>
                <div className={cl.OurWorks__services}>
                    {count.map(e =>{
                        return <Service key={e} num={e}/>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurWorks