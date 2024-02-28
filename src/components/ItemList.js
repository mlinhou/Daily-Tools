import React, { useState, useEffect } from 'react'
import Item from './Item'
import Modal from 'react-modal';

function ItemList() {

  const [itemList, setItemList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [todoMap, setToDoMap] = useState([]);

  const openModal = () => {
    
    setIsOpen(true);
    
  };

  const closeModal = () => {
    
    setIsOpen(false);
    setTextInput('');
    
  };

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    closeModal();
    
    e.preventDefault();
    itemList.push(textInput);
    setItemList(itemList);
    setTextInput('');
    const componentList = itemList.map((item, index) => (
      <Item note={item} index={index} handleDelete={handleDelete} handleEdit={handleEdit}/>
    ))
    let updatedMap = new Map();
    for(let i=0; i<componentList.length; i++){
      updatedMap.set(i, componentList[i]);
    }

    setToDoMap(updatedMap);
    
  };

  const handleDelete = (index) => {

    const updatedList = itemList.filter((_, i) => i !== index);
    setItemList(updatedList)
    //need to somehow add 1 to the key if you delete a note so it keeps track of position
    // for(let i=0; i< todoMap.length; i++){
    //   if(index < todoMap[i].key){
    //     todoMap[i].key
    //   }
    // }
  }

  const handleEdit = (index, editedText) => {
    itemList.splice(index, 1, editedText);
    console.log("edited list is " + itemList)
    setItemList(itemList);
  }

  const showList = () => {
    console.log(itemList);
  }

  const checkConsole = () => {
    // console.log("isOpen is " + isOpen);
    console.log(todoMap)
  }
  useEffect(() => {
    const updatedMap = itemList.map((item, index) => (
      <Item note={item} index={index} handleDelete={handleDelete} handleEdit={handleEdit}/>
    ))
    setToDoMap(updatedMap);
  }, [itemList])
  

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
      {Array.from(todoMap.values()).map((component, index) => (
        <div key={index}>{component}</div>
      ))}
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
        <button onClick={checkConsole}>Console for isOpen</button>
      </Modal>
      <button onClick={showList}>Show list</button>
      <button onClick={checkConsole}>Console</button>
    </div>

  )
}

export default ItemList