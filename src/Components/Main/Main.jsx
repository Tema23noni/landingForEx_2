import React from 'react'
import Button from '../../UI/Button/Button';
import cl from './Main.module.scss';
const Main = () => {
  return (
    <div className={cl.Main}>
        <div className={cl.studioIT}>
            <div className='cont'>
                <div className={cl.Main__content}>
                    <span>Передовая IT студия</span>
                    <h1>Мы создаем легкие решения сложных задач и проблем</h1>
                    <Button>Наши проекты</Button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main