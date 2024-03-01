import React, { useState, useEffect } from 'react'
import './item.css'
import Modal from 'react-modal';

export default function Item({ handleDelete, note , handleEdit}) {

  const [isOpen, setIsOpen] = useState(false);
  const [textInput, setTextInput] = useState('');

  const openEditModal = () => {
    setIsOpen(true);
  };

  const closeEditModal = () => {
    setIsOpen(false);
    setTextInput(note.task)
  };

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const edit = () => {
    handleEdit(note, textInput);
    closeEditModal();
  }

  return (
    <div className='item-container'>
        <div className='item-text'>{note.task}</div>
        <button onClick={openEditModal}>EDIT</button>
        <button onClick={ () => handleDelete(note.id)}>Delete</button>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeEditModal}
        >
          <input
              type="text"
              value={textInput}
              onChange={handleChange}
              placeholder="Enter text..."
            />
        <button onClick={edit}>Save Note</button> {/* Close button inside modal */}
        
        </Modal>
    </div>
  )
}
