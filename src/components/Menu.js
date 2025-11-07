import React, { useEffect, useState } from 'react'

const Menu = ({menu, categories, filter, setFilter}) => {
    const [filteredArray, setFilteredArray] = useState(menu)
    console.log(filteredArray)
    useEffect(()=>{
        if(filter !== "All"){
            setFilteredArray(menu.filter((item) => filter===item.category))
        }
        else{
            setFilteredArray(menu)
        }
        
    },[filter])
  return (
    <div id='main'>
      {
        categories.map((category, index)=>(
            <button id = {`filter-btn-${index}`} onClick={()=>{setFilter(category)}} key={index}>{category}</button>
        ))
        
      }
      {/* <button id='filter-button-0' onClick={()=>{setFilter('All')}}>All</button>
      <button id='filter-button-1' onClick={()=>{setFilter('Breakfast')}}>BreakFast</button>
      <button id='filter-button-2' onClick={()=>{setFilter('Lunch')}}>Lunch</button>
      <button id='filter-button-3' onClick={()=>{setFilter('Shakes')}}>Shakes</button> */}
      {
        filteredArray.map((item)=>(
            <div key={item.id} data-test-id = {`menu-item-${item.category.toLowerCase()}`}>
                <div>{item.name}</div>
                <div>{item.category}</div>
                <div>{item.price}</div>
            </div>
        ))
      }
    </div>
  )
}

export default Menu
