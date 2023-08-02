import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import GridItem from './GridItem';
import { Link } from 'react-router-dom';

const LikedMovies = () => {
  const [likedList,setLikedList]=useState([]);
  const [pages,setPages]=useState(0);
  const [currentPage,setCurrentPage]=useState(0);
  const [itemsPerPage,setItemPerPage]=useState(10);
  const [itemsToDisplay,setItemsToDisplay]=useState([]);
  
  
  useEffect(() => {
        let arrayFromStorage = localStorage.getItem('likedList');

        if(arrayFromStorage) {
            arrayFromStorage = JSON.parse(arrayFromStorage);
            setPages(Math.ceil(arrayFromStorage.length/itemsPerPage));
        } else {
            arrayFromStorage = [];
            setPages(0);
        }
        setLikedList(arrayFromStorage);
   
    }, []);
    useEffect(()=>{
        function  handleFirstTimeLoad()
    {
        const itemsVisited = currentPage;

        const displayItems = likedList
          .slice(currentPage*itemsPerPage,  itemsPerPage+currentPage*itemsPerPage)
          // .map((item) => <div key={item}>{`Item ${item}`}</div>);
          setItemsToDisplay(likedList
              .slice(0,  itemsPerPage))
          console.log(likedList
              .slice(0,  1),'sfds')
    }
    handleFirstTimeLoad();
    },[likedList])
  
    function handlePageClick(data)
    {
        let current = data.selected ;
        console.log(current, "currentpage");
        setCurrentPage(current);
        // handleRetrievingList();
        const itemsVisited = currentPage * itemsPerPage;
    
      const displayItems = likedList
        .slice( currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
        // .map((item) => <div key={item}>{`Item ${item}`}</div>);
        setItemsToDisplay(displayItems)
        console.log(displayItems,'sfds')
    }
  return (
    <>
    <div className='container'>
  <div className='likedSectionTitle'>
<h1>Liked Movies</h1>
  </div>
<div class="grid-container" id="grid-container">
{
    itemsToDisplay?.map((obj)=>{
        return(
       <Link to={`/movieDetails/${obj.imdbID}`} movieId={obj.id}> <GridItem listItem={obj}/></Link>
        )
    })
}
    </div>

    {/* <div id="pagination-container">
        
    </div> */}
    <ReactPaginate
                          previousLabel={"previous"}
                          nextLabel={"next"}
                          breakLabel={"..."}
                          pageCount={pages}
                          marginPagesDisplayed={1}
                          pageRangeDisplayed={3}
                          onPageChange={handlePageClick}
                              containerClassName={
                                "pagination "
                              }
                          forcePage={currentPage }
                        //   pageClassName={"page-item"}
                        //   pageLinkClassName={"page-link"}
                        //   previousClassName={"page-item"}
                        //   previousLinkClassName={"page-link"}
                        //   nextClassName={"page-item"}
                        //   nextLinkClassName={"page-link"}
                        //   breakClassName={"page-item"}
                        //   breakLinkClassName={"page-link"}
                        //   activeClassName={"active"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"}
                        renderOnZeroPageCount={null}
                        />
    
    </div>

    </>
  )
}

export default LikedMovies