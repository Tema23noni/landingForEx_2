import React, { useState } from 'react'
import cl from './Header.module.scss';
import MenuB from './MenuB/MenuB';
import MenuB__open from './MenuB/MenuB__open';
const Header = () => {
  const [openModal, setOpenModal] = useState(false);
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
            <div className={cl.navigateMob}>
              <MenuB__open openModal={openModal} setOpenModal={setOpenModal}/>
              <MenuB openModal={openModal} setOpenModal={setOpenModal}/>
            </div>
        </div>
        
    </div>
  )
}

export default Header