import React from "react";
import './item.css'

export default function Item(props) {
  return (
    <div className='item-container'>
        <div className='item-text'>{props.note}</div>
        <div className='icons'>ICONS</div>
    </div>
  )
}
