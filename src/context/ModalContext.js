import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'


export const ModalContext = createContext()


const ModalProvider = (props) => {

    //state provider

    const [idRecipe, saveIdRecipe] = useState(null)
    const [recipeInfo, saveRecipe] = useState({})

    useEffect(()=> {
        const obtainRecipe = async ()=>{
            if(!idRecipe) return

            const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`)

            saveRecipe(result.data.drinks[0])
        }
        obtainRecipe()
    }, [idRecipe])

    return (
        <ModalContext.Provider
            value={{
                saveRecipe,
                recipeInfo,
                saveIdRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;

