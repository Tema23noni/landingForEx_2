import React from 'react'
import cl from '../Header.module.scss';
const MenuB = ({openModal,setOpenModal}) => {
  return (
    <div className={openModal? [cl.MenuB,cl.active].join(' '):cl.MenuB} onClick={() => setOpenModal(!openModal)} >
        <div className={cl.MenuB__cont} onClick={(e) => e.stopPropagation()}>
            <nav className={cl.navigate}>
                <ul className={cl.links}>
                    <li><p>Главная</p></li>
                    <li><p>Наши проекты</p></li>
                    <li><p>Услуги</p></li>
                    <li><p>Новости</p></li>
                    <li><p>Контакты</p></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default MenuB