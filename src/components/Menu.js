import React, { useEffect, useState } from 'react'

const Menu = ({menu, categories, filter, setFilter}) => {
    const [filteredArray, setFilteredArray] = useState(menu)

    useEffect(()=>{
        if(filter !== "All"){
            setFilteredArray(menu.filter((item) => filter===item.category))
        }
        else{
            setFilteredArray(menu)
        }
    },[filter])
  return (
    <div>
      {
        categories.map((category, index)=>(
            <button id = {`filter-button-${index}`} onClick={()=>{setFilter(category)}} key={index}>{category}</button>
        ))
        
      }
      {
        filteredArray.map((item)=>(
            <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.categories}</div>
                <div>{item.price}</div>

            </div>
        ))
      }
    </div>
  )
}

export default Menu
