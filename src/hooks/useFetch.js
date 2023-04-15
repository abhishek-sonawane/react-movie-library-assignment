import React from 'react'
import { useState,useEffect } from 'react'

function UseFetch(url,options) {
  const [loading,setLoading] = useState(true)
  const [data,setData] = useState(null)
  const [error,setError] = useState(false)

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await fetch (url,options)
        const data = response.json()
        setData(data)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }

    fetchData()
  },[])

  return {loading,data,error}

}

export default UseFetch