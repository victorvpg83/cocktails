import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CategoryContext =createContext()

const CategoryProvider = (props)=> {

    // context state

    const [categories, saveCategories] = useState([])

    //API call

    useEffect(()=>{
        const obtainCat = async ()=> {
            const categories = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            saveCategories(categories.data.drinks)
        }
        obtainCat()
    },[])

    return (
        <CategoryContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    )


}

export default CategoryProvider