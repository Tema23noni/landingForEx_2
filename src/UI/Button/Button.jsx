import React from 'react'
import cl from './Button.module.scss';
const Button = ({children}) => {
  return (
    <>
        <button className={cl.btn}>{children}</button>
    </>
  )
}

export default Button