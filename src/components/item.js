import React, { useState } from 'react'
import './item.css'
import Modal from 'react-modal';

export default function Item({ index, handleDelete, note, handleEdit }) {

  const [editOpen, setEditOpen] = useState(false);
  const [noteText, setNoteText] = useState(note);
  const openEditModal = () => {
    setEditOpen(true);
  };

  const closeEditModal = () => {
    setEditOpen(false);
  };

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSave = () => {
    handleEdit(index, noteText);
  }
  
  const checkIndex = () => {
    console.log(index);
  }

  return (
    <div className='item-container'>
        <div className='item-text'>{note}</div>
        <button onClick={openEditModal}>EDIT</button>
        <Modal
        isOpen={editOpen}
        >
          <input
              type="text"
              value={noteText}
              onChange={handleChange}
            />
          <button onClick={handleSave}>Save Edit</button> {/* Close button inside modal */}
          <button onClick={closeEditModal}>Close</button>
          <button onClick={checkIndex}>Index</button>
        </Modal>
        <button onClick={ () => handleDelete(index)}>Delete</button>
    </div>
  )
}
