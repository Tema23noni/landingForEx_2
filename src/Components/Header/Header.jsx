import React from 'react'
import cl from './Header.module.scss';
const Header = () => {
  return (
    <div className={cl.Header}>
        
        <div className='cont'>
            <nav className={cl.navigate}>
                    <div>
                        <ul className={cl.links}>
                            <li><p>Главная</p></li>
                            <li><p>Наши проекты</p></li>
                            <li><p>Услуги</p></li>
                            <li><p>Новости</p></li>
                            <li><p>Контакты</p></li>
                        </ul>
                    </div>
                </nav>
        </div>
        
    </div>
  )
}

export default Header