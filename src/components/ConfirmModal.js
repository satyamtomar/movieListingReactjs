import React, { useState } from 'react';
import Modal from 'react-modal';

// Modal.setAppElement('#root'); // replace '#root' with the id of the root element of your app

const ConfirmationModal = ({modalIsOpen,setModalIsOpen,handleLike}) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  const handleConfirm = () => {
    // Place your confirmation logic here
    console.log("Confirmed!");
    handleLike();
    closeModal();
  };
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#F5F5F5',
      border: '1px solid #BDBDBD',
      borderRadius: '4px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
      fontFamily: 'Arial, sans-serif',
      fontSize:'23px'
      ,fontWeight:'700'
    },
  };
  
  const inputStyles = {
    width: '80%',
    padding: '10px',
    // marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #BDBDBD',
  };
  
  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#3F51B5',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  };
  return (
    <div>
      {/* <button onClick={openModal}>Open Confirmation Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation Modal"
        style={modalStyles}
      >
        <h2 style={{fontSize:'22px'}}>Are you sure you want to remove like.? Your edit if any, will be removed too.</h2>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',gap:'2px'}}> 
            
        <button onClick={handleConfirm} style={buttonStyles}>Yes</button>
        <button onClick={closeModal} style={buttonStyles}>No</button>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
