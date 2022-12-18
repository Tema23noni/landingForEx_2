import React from 'react'
import MakeSite from './MakeSite'
import cl from './MakeMobile.module.scss';
import Button from '../../UI/Button/Button';
const MakeMobile = () => {
  return (
    <div className={cl.MakeMobile}>
        <div className='cont'>
            <div className={cl.MakeMobile__content}>
                <div className={cl.MakeMobile__text}>
                    <h2>Мы создаем мобильные приложения для крупных корпораций</h2>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                </div>
                <div className={cl.MakeSites}>
                    <MakeSite/>
                    <MakeSite/>
                    <MakeSite/>
                </div>
                <div className={cl.allProduct}>
                    <Button>Все услуги</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MakeMobile