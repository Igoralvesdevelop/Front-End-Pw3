import React from 'react'
import  style from './input.module.css'

function Input({type, text, name, id, placeholder, value}){
  return(
    <div className={style.form_control}>

      <label htmlFor={name}>{text}</label>
      <input 
        type={type}
        name={name}
        id={id}
        placeholder={placeholder} 
        value={value}
        />
    </div>
  )
}

export default Input