import React from 'react'
import cl from './Contact.module.scss';
const  Contacts = ({children}) => {
  return (
    <div className={cl.Contacts}>
        <h3>{children}</h3>
        <div className={cl.links}>
            <p>Главная</p>
            <p>Наши проекты</p>
            <p>Наши услуги</p>
            <p>Контакты</p>
        </div>
    </div>
  )
}

export default  Contacts