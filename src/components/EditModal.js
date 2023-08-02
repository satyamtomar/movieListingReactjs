import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

// Modal.setAppElement('#root') // replace '#root' with the id of your application node

function MyModal({ isOpen, closeModal,
    likedList,
     details,setDetails
     ,
     setLikedList
     }) {
    const [newList,setNewList]=useState([]);
    // const [likedList,setLikedList]=useState([])
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

      const handleChangeDetails = (e) => {
        setDetails({
          ...details,
          [e.target.name]: e.target.value,
        });
      };
      function handleEditMovie()
      {
        setNewList(likedList?.filter((list)=>list?.imdbID!=details?.imdbID));
        
        localStorage.setItem('likedList',JSON.stringify([...newList,details]));
        setLikedList([...newList,details]);

      }
    //   useEffect(() => {
       
    //   }, [newList])
      
  return (
    
<Modal 
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="My Modal"
      style={modalStyles}

    >
        <div className='editModalDivTitle'>
            <span>Edit {details?.Type}</span>
        </div>
        <div className='editModalDiv'>
        
        <span>Title</span>
        <input value={details?.Title} name='Title'     style={inputStyles} onChange={handleChangeDetails} />
      </div>
      <div className='editModalDiv'>

        <span>Plot</span>
        <input value={details?.Plot} name='Plot'  style={inputStyles} onChange={handleChangeDetails}  />
      </div>
      <div className='editModalDiv'>
        <span>Type</span>
        <input value={details?.Type} name='Type'   style={inputStyles} onChange={handleChangeDetails} />
      </div>
      <div className='editModalDiv'>
        <span>Year</span>
        <input value={details?.Year} name='Year'    style={inputStyles}  onChange={handleChangeDetails} />
      </div>
      <div className='editModalDiv'>
        <span>Rated</span>
        <input value={details?.Rated} name='Rated'   style={inputStyles}  onChange={handleChangeDetails} />
      </div>
      <button onClick={()=>{closeModal();handleEditMovie()}} style={buttonStyles}>Edit</button>
    </Modal>
  );
}

export default MyModal;
