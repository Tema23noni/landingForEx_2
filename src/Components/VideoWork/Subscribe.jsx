import React from 'react'
import cl from './VideoWork.module.scss';
const Subscribe = () => {
  return (
    <div className={cl.Subscribe}>
        <h3>Подпишитесь на нашу рассылку</h3>
        <p>Полезные статьи, акции, новости - получите все это сейчас!</p>
        <form className={cl.Subscribe__form}>
            <div className={cl.forms}>
              <input type="text" />
              <button>Подписаться</button>
            </div>
        </form>
        <p className={cl.Subscribe__text}>Мы не шлем спам, и передаем никому ваши данные.</p>
    </div>
  )
}

export default Subscribe