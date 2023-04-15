import React from 'react'
import { useContext } from 'react'
import globalContext from '../context/GlobalState'
import ItemCard from '../components/ItemCard'
import {GiPopcorn} from 'react-icons/gi'


function Favouritespage() {
  const {favourite} = useContext(globalContext)
  return (
    <div className='bg-inherit'>
      <h1 className='text-2xl text-white text-center p-10'> 
        Favourites
      </h1>
      <div className='p-6 px-24 flex flex-row justify-center content-center gap-7 flex-wrap '>
      {favourite.length>0 ? favourite.map(item=>{
       return <ItemCard item={item} />
      }):<>
      <h2 className='text-3xl text-white flex justify-center items-end gap-3'>
        No favourites yet? 
        <GiPopcorn size='1.3em' />
        </h2>
        </>}
    </div>
    </div>
  )
}

export default Favouritespage