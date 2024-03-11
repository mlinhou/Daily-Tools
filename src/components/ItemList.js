import React, { useState, useEffect } from 'react'
import Item from './Item'
import Modal from 'react-modal';
import './ItemList.css';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


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
    setItemList([...itemList, {id: uuidv4(), task: textInput}]);
    setTextInput('');
    closeModal();
  };

  const handleEdit = (note, editedText) => {
    const index = itemList.indexOf(note);
    itemList[index].task = editedText;
    setItemList(itemList);
  }

  const handleDelete = (id) => {
    setItemList(itemList.filter(todo => todo.id !== id))
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
      {itemList.map((item) => (
        <Item note={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
      ))
      }
      <div className='create-modal'>
        <button className='create-btn' onClick={openModal}><FontAwesomeIcon icon={faPlus} /></button>
      </div>
      
      <Modal
        className="custom-modal"
        overlayClassName="custom-overlay"
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
        <input
            className='input-text'
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