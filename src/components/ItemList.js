import React, { useState } from 'react'
import Item from './Item'
import Modal from 'react-modal';

function ItemList() {

  const itemList = [];
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Item note='Hello'/>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>NOTE TITLE</h2>
        <p>Note content here...</p>
        <button onClick={closeModal}>Close</button> {/* Close button inside modal */}
      </Modal>
    </div>

  )
}

export default ItemList