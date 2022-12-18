import React from 'react'
import Button from '../../UI/Button/Button';
import cl from './OurProjects.module.scss';
import Project from './Project';
const OurProjects = () => {
  return (
    <div className={cl.OurProjects}>
        <div className='cont'>
            <div className={cl.OurProjects__content}>
                <div className={cl.OurProjects__text}>
                    <h3>Наши проекты</h3>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                </div>
                <div className={cl.Projects}>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
                <div className={cl.btn}><Button>Все проекты</Button></div>
            </div>
        </div>
    </div>
  )
}

export default OurProjects