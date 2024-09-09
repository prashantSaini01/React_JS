/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/prashantSaini01').then((response)=>{
    //         return response.json()
    //     }).then((data)=>{
    //         return setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-orange-700 text-white p-4 text-3xl rounded-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} width={200} className='rounded-full'></img>
      
    </div>
  )
}

export default Github



export const githubLoader = async ()=>{
const response = await fetch('https://api.github.com/users/prashantSaini01')
const data = await response.json()
return data

};
