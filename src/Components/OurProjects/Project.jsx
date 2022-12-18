import React from 'react'
import cl from './OurProjects.module.scss';
import img from '../../img/code.png';
const Project = () => {
  return (
    <div className={cl.Project}>
        <img src={img} alt="" />
        <p>Это проект</p>
    </div>
  )
}

export default Project