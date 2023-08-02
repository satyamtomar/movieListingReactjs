import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetailsAction from '../actions/MovieDetails.Action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons'
import Modal from 'react-modal';
import MyModal from './EditModal';

const MovieDetails = () => {
    const params=useParams();
    const [details,setDetails]=useState();
    const [isLiked, setIsLiked] = useState(false);
    const [likedList,setLikedList]=useState([]);
    const [likedExist,setLikedExist]=useState(false);
    const [modalOpen, setModalOpen] = useState(false);
 

    
 const getMoviesDetails=async()=>{

MovieDetailsAction.getMovieDetails(params.id,(err, res) => {
    if (err) {
      console.log(err, "helllooo");
    } else {
    //   setGetCategories(res.data);
    // console.log(params,'prms')
    setDetails(res);
    
      console.log(res, " daata ");
    }
  });
 }
    useEffect(() => {
        let arrayFromStorage = localStorage.getItem('likedList');
// console.log('ddsfd',arrayFromStorage);
// if(arrayFromStorage ) {
//     arrayFromStorage = JSON.parse(arrayFromStorage);
//     if (Array.isArray(arrayFromStorage) && arrayFromStorage.length === 1 && arrayFromStorage[0] === null) {
//         arrayFromStorage = [];
//     }
// } else {
//     arrayFromStorage = [];
// }
// let arrayFromStorage=;
 arrayFromStorage = JSON.parse(arrayFromStorage || '[]');
if (Array.isArray(arrayFromStorage) && arrayFromStorage.length === 1 && arrayFromStorage[0] === null) {
    arrayFromStorage = [];
}

console.log('hanji',arrayFromStorage,'hh');
setLikedList(arrayFromStorage);
// if(arrayFromStorage==[])
        getMoviesDetails();
       
    }, [])

    useEffect(()=>{

console.log(details,'dtt',likedList);
 setIsLiked(likedList.some(item => item?.imdbID == params.id));
        setLikedExist(likedList.some(item => item?.imdbID == params.id));
       

    },[details,likedList])
    const handleLike = () => {
        let like=isLiked;
        setIsLiked(!isLiked);
        if(like==false)
        {
            console.log(likedList,'hahah',details);
            if(details)
            {
            localStorage.setItem('likedList', JSON.stringify([...likedList,details]));
            setLikedList([...likedList,details]);
            }
        }
        else{
            let newLikedList=likedList.filter((list)=>list?.imdbID!=params.id)
            console.log(newLikedList,'hahaah',details);
           
            localStorage.setItem('likedList',JSON.stringify(newLikedList));
            setLikedList(newLikedList);
        }
      };
  return (
    <>
    <MyModal 
        isOpen={modalOpen} 
        closeModal={() => setModalOpen(false)} 
        likedList={likedList}
        details={details} 
        setDetails={setDetails}
        setLikedList={setLikedList}
        // onEdit={handleEdit}
      />
<div className='movieDetailsContainer'>
    <div className='movieDetailTitle'>
        <p>{details?.Title}</p>
    </div>
   <div className='movieImage'>
       <img src={`${details?.Poster}`}/>
       <button onClick={()=>handleLike()} className='likedButton'>
      <FontAwesomeIcon icon={isLiked ? faSolidStar : faEmptyStar} color="orange" size="2x" />
    </button>
   </div>

  <div className='movieDetailEditBtnDiv'>
  <button className='movieDetailEditBtn' onClick={()=>{if(isLiked){setModalOpen(true);}else{alert('Please like the movie first then you can edit it')}}}>Edit {details?.Type}</button>
  
    </div> 
   <div className='movieDesc'>
    <p >     Plot:</p>
   <p>{details?.Plot}</p>
   </div>
   <div className='movieRelatedDetails'>
    <div>
    <p > Type:</p>
   <p>{details?.Type}</p>
    </div>
   <div>
   <p>Year</p>
   <p>{details?.Year}</p></div>
   <div>
   <p>Rated</p>
   <p>{details?.Rated}</p>
   </div>
   </div>
</div>
    </>
  )
}

export default MovieDetails