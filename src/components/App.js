
import React, { useState } from "react";
import '../styles/App.css';
import Menu from "./Menu";
// import { set } from "cypress/types/lodash";

const App = () => {
    const menuArray = [
        {
            id: 1,
            name: "Buttermilk Pancakes",
            price: 15.99,
            category: "Breakfast"
        },
        {
            id: 2,
            name: "Godzilla Milkcakes",
            price: 15.99,
            category: "Shakes"
        },
        {
            id: 3,
            name: "Oreo Dream",
            price: 15.99,
            category: "Shakes"
        },
        {
            id: 4,
            name: "Butter Paneer Masala",
            price: 15.99,
            category: "Lunch"
        },
        {
            id: 5,
            name: "SoyaChunks Paneer Pulav",
            price: 15.99,
            category: "Lunch"
        }

    ]
    const categories = ["All","Breakfast", "Lunch", "Shakes"]
    const [filter, setFilter] = useState(categories[0])
  return (
    
    <div>
      <h1>Our Menu</h1>
      <Menu menu = {menuArray} categories = {categories} filter = {filter} setFilter = {setFilter}></Menu>

    </div>
  )
}

export default App
