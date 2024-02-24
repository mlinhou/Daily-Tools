import React, { useState } from 'react'
import Item from './Item'
import Modal from 'react-modal';

function ItemList() {

  const [itemList, setItemList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [textInput, setTextInput] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    itemList.push(textInput);
    setItemList(itemList);
    setTextInput('');
    closeModal();
  };

  const showList = () => {
    console.log(itemList);
  }
  return (
    <div>
      <ul>
        {itemList.map((item) => (
          <Item note={item}/>
        ))
        }
      </ul>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
        <h2>NOTE TITLE</h2>
        <input
            type="text"
            value={textInput}
            onChange={handleChange}
            placeholder="Enter text..."
          />
        <button onClick={handleSubmit}>Save Note</button> {/* Close button inside modal */}
        
      </Modal>
      <button onClick={showList}>Show list</button>
    </div>

  )
}

export default ItemList