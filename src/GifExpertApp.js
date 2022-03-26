import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {


  const [categories, setCategories] = useState(['euphoria'])

  return (
    <>
      <h2>Gif Expert App</h2>
      <hr/>
      <AddCategory setCategories={ setCategories }/>
      <ol>
        { 
        categories.map( category => {
          return <GifGrid key={category} category = {category}/>
        })
        }
      </ol>
    </>
  )
}


export default GifExpertApp;