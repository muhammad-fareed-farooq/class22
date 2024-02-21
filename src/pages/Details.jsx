import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    const {id}  = useParams()
    const [singlepro,setSinglepro] = useState("")

    useEffect(()=>{
        const  fatchsinglepro = axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            console.log(res.data);
            setSinglepro(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    
  return (
    <div style={{width:"80%",display:'flex',justifyContent:"center"}} >
     <div >
     <img  width="80%" src={singlepro.image} alt="" />
     </div>
     <div style={{marginTop:"50px"}}>
     <h1>{singlepro.title}</h1>
      <h1>{singlepro.description}</h1>
     </div>

    </div>
  )
}
