import React, { useState, useEffect } from 'react'
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

  const handleDelete = (index) => {
    const updatedList = itemList.filter((_, i) => i !== index);
    setItemList(updatedList)
  }

  const showList = () => {
    console.log(itemList);
  }

  // useEffect(() => {
  //   const savedData = JSON.parse(localStorage.getItem('myData'));
  //   if(savedData){
  //     setItemList(savedData);
  //   }
  // }, []);

  // // Save data to localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem('myData', JSON.stringify(itemList))
  // }, [itemList]); // data is the dependency

  
  return (
    <div>
      {itemList.map((item, index) => (
        <Item note={item} index={index} handleDelete={handleDelete}/>
      ))
      }
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
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