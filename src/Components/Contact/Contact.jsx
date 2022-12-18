import React from 'react'
import Contacts from './ Contacts';
import cl from './Contact.module.scss';
const Contact = () => {
  return (
    <div className={cl.Contact}>
        <div className='cont'>
            <div className={cl.Contact__content}>
                <div className={cl.Contact__form}>
                    <div className={cl.Contactss}>
                        <h3>Контактная информация</h3>
                        <div className={cl.links}>
                            <p>test@test.ru</p>
                            <p>+8 777 555 66 99</p>
                            <p>Москва, Бульвар Ленина 33</p>
                        </div>
                    </div>
                    <Contacts>Основные ссылки</Contacts>
                    <Contacts>Наши проекты</Contacts>
                    <Contacts>Социальные сети</Contacts>
                </div>
                <div className={cl.line}></div>
                <div className={cl.Contact__text}>(с) 2019. Все права защищены.</div>
            </div>
        </div>
    </div>
  )
}

export default Contact