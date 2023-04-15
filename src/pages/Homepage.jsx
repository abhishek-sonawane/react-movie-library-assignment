import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import globalContext from '../context/GlobalState'
import Search from '../components/Search'
import ItemCard from '../components/ItemCard'
import useLocalStorage from '../hooks/useLocalStorage'


function Homepage() {
   
const {data} = useContext(globalContext)
  
  
  return (
    <div className=' bg-inherit '>
        {/* sidebar */}
      
      {/* build a searchbar */}
      <Search />
      {/* mapping the data */}

   
   <div className='p-6 px-24 flex flex-row justify-center content-center gap-7 flex-wrap '>
   {data.results?data.results.map(item=>{
       return <ItemCard item={item} />
    }):<>loading...</>}
   </div>
    </div>
  )
}

export default Homepage