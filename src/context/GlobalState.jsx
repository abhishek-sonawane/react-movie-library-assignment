import { createContext ,useEffect,useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const globalContext = createContext()

export const GlobalProvider =({children})=>{
  const [data,setdata] = useState([null])
  const [favourite,setFavourite] = useLocalStorage('favourites',[])


// homepage
    useEffect(()=>{
        const fetchData =async()=>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
            const result = await response.json()
            setdata(result)
           console.log(result)
        } catch (error) {
          console.log(error)
        }
        }
        fetchData()
      },[])

//  add tp favourites
  const addToFav = (item)=>{
    console.log(item)
    setFavourite([...favourite,item])
}

const removeFromFav = (item)=>{
  console.log(item)
  setFavourite(()=>{
    return favourite.filter((show)=>show.id!==item.id)
  })
}
// search for movies & TV shows
  const searchMedia=async(query)=>{
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`)
    const result = await response.json()
    setdata(result)
  }

    return(
        <globalContext.Provider
        value={{addToFav,data,setdata,searchMedia,favourite,removeFromFav}}>
        {children}
    </globalContext.Provider>
    )
}


export default globalContext