import React from 'react'
import './Button.css'
const Button = (props) => {
let classes = 'button'
classes += props.operation ? 'operation' : ''
classes += props.operation ? 'double' : ''
classes += props.operation ? 'triple' : ''

  return (
   <button 
   className={classes}
   onClick={e => props.click && props.click(props.label)}
   >{props.label}</button>
  )
}

export default Button
