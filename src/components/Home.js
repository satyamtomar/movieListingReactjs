import React, { useEffect, useState } from 'react'
import HomeAction from '../actions/Home.Action';
import GridItem from './GridItem';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate'

const Home = () => {
    const [list,setList]=useState([]);
    const [search,setSearch]=useState('');
    const [currentPage,setCurrentPage]=useState(1);
    const [pages,setPages]=useState(0);
    const [itemsPerPage,setItemPerPage]=useState(10);
  
    const handleRetrievingList=async()=>{

        HomeAction.getMovieList(search,currentPage,(err, res) => {
            if (err) {
              console.log(err, "helllooo");
            } else {
            //   setGetCategories(res.data);
            setList(res.Search);
            setPages(Math.ceil(res.totalResults/itemsPerPage));
              console.log(res, " daata ");
            }
          });
    }
    useEffect(() => {
        // handleRetrievingList();
    }, [])
    
function handlePageClick(data)
{
    let current = data.selected + 1;
    console.log(current, "currentpage");
    setCurrentPage(current);
    handleRetrievingList();
}
    

  return (
    <>

<div class="container">

    <div class="search-container">
        <input type="text" id="search-input" placeholder="Search for a movie..." onChange={(e)=>{setSearch(e.target.value)}} value={search} />
        <button id="search-btn" onClick={handleRetrievingList}>Search</button>
      <Link to='/likedMovies'>  <button id="likedMovies">Liked Movies</button></Link> 
      </div>
      {/* <!-- <div id="list-container"></div> --> */}

    <div class="grid-container" id="grid-container">
{
    list?.map((obj)=>{
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
                          forcePage={currentPage - 1}
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
{/* <!-- <button id="openModalButton">Open Modal</button> --> */}

<div id="myModal" class="modal">
  <div class="modal-content" id="modal-content">
    <span class="close">&times;</span>
    {/* <!-- <p>Some text in the Modal..</p> --> */}
  </div>
</div>

   
</>
  )
}

export default Home