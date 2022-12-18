import React from 'react'
import cl from '../Header.module.scss';
const MenuB__open = ({openModal,setOpenModal}) => {
    console.log(openModal)
  return (
    <div className={cl.MenuB__open} onClick={() => setOpenModal(!openModal)}>
        <div className={openModal ? [cl.Open__Modal, cl.active].join(' '): cl.Open__Modal}>
            <span></span>
        </div>
    </div>
  )
}

export default MenuB__open