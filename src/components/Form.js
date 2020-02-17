import React, { useContext, useState } from 'react';
import {CategoryContext} from '../context/CategoryContext'
import {RecipesContext} from '../context/RecipesContext'

const Form = () => {

    const [search, saveSearch] = useState({
        name: '',
        category:''
    })

    const {categories} = useContext(CategoryContext)
    const {searchRecipes, saveConsult} = useContext(RecipesContext) 

    const obtainDataRecipe = e =>{
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form
            className='col-12'
            onSubmit={e=>{
                e.preventDefault()
                searchRecipes(search)
                saveConsult(true)
            }}
        >
            <fieldset className='text-center'>
                <legend>Busca por categoría o ingrediente</legend>

            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input 
                        name='name'
                        className='form-control'
                        type='text'
                        placeholder='Busca por ingrediente'
                        onChange={obtainDataRecipe}
                    />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='category'
                        onChange={obtainDataRecipe}

                    >
                        <option value=''>--Selecciona categoría--</option>
                        {categories.map(category=>(
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            > {category.strCategory} </option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input 
                        type='submit'
                        className='btn btn-block btn-primary'
                        value='Buscar bebidas'
                    />
                </div>
            </div>

        </form>
    );
};

export default Form;