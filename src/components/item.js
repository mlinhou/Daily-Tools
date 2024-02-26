import React from "react";
import './item.css'

export default function Item({ handleDelete, note }) {

  return (
    <div className='item-container'>
        <div className='item-text'>{note}</div>
        <div className='icons'>ICONS</div>
        <button onClick={ () => handleDelete(note)}>Delete</button>
    </div>
  )
}
