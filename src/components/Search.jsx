import React, { useEffect, useState } from 'react'
import globalContext from '../context/GlobalState'
import { useContext } from 'react'
import {BiSearch} from 'react-icons/bi'

function Search() {
const [query,setquery] = useState('')
const {searchMedia} =useContext(globalContext)

useEffect(()=>{
  document.title = `search results for ${query}`
},[query])

const handleTextChange = (e)=>{
  setquery(e.target.value)
}
const formSubmit =(e)=>{
  e.preventDefault()
  searchMedia(query)
  // setquery('')
}
  return (
    <div className=' text-white w-1/2 pt-10 mx-auto'>
       <form className=' relative  justify-center flex flex-row gap-4' onSubmit={formSubmit} >
       <input placeholder='search' className='  p-2 py-3 w-full bg-appBg_dark-200 border-[1.7px] border-appBg_dark-50 rounded-xl' type="text" value={query} onChange={handleTextChange} />
       <button className=' text-lg absolute right-5 top-4' type='submit' >
          <BiSearch  />
       </button>
       </form>
    </div>
  )
}

export default Search