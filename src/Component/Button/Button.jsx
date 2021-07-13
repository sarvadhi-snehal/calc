import React from 'react'
import './Button.scss'
function Button({number, className ,onClick}) {
    return (
        <button  className={className} name={number} onClick={onClick} value={number}>
         {number}
        </button>
    )
}

export default Button
