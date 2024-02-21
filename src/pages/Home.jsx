import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Productdetail from './Productdetail'
import { useNavigate } from 'react-router-dom'
// import { Navbar_Component } from '../components/Navbar_Component'
// import { User_Profile_Section } from '../components/User_Profile_Section'



const Home = () => {
    const [products,setProuduct]= useState([])
    const navigate = useNavigate()
    

    useEffect(()=>{
        getdata()
    },[])

    const getdata  = ()=>{
        const data = axios.get("https://fakestoreapi.com/products")
        .then((result)=>{
            console.log(result.data);
            setProuduct(result.data)
        }).catch((error)=>{
            console.log(error);
        })
        console.log(products);
    }

     const detailsHandle = (id)=>{
        navigate(`/productdetails/${id}`)
     }
    return (
        // <div className='bg-bg_color h-[100dvh]'>
        //     <Navbar_Component />
        //     <div className='px-3'>
        //         <div >
        //             <User_Profile_Section />          
        //         </div>
        //     </div>
        // </div>
        <div style={{display:"flex", flexWrap:"wrap",gap:"6px"}}>
            {products.map((e,i)=>{
                return(
                    <Productdetail
                    key={i}
                     iamge={e.image}
                     tittle = {e.title}
                     des = {e.description}
                     onClick={() => detailsHandle(e.id)}
                    />
                )
            })}
            
        </div>
    )
}

export { Home }
