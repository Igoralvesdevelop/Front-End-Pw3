import style from './Select.module.css'

function Select({text, name, id}){
  return(
      <div className={style.form_control}>
          <label htmlFor={name}>{text}</label>

          <select name={name} id={id}>
          

          </select>

      </div>
  )


}
export default Select