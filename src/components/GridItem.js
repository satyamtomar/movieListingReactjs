import React from 'react'

const GridItem = (listItem) => {
  return (
    <>
    {console.log(listItem,'li')}
    <div class="grid-item" >
        <div class="titleDiv">
            <span>{listItem.listItem.Title}</span>
            </div>
            <div class="grid-image">
                <img src={`${listItem.listItem.Poster}`} alt="Descriptive text" class="grid-item-img"/>
                </div>
                <div class="item-desc">
                    <span>{listItem.listItem.Type}</span><span>{listItem.listItem.Year}</span>
             </div>
               </div>
    </>
  )
}

export default GridItem