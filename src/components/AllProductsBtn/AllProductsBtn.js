import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../Redux/Products/productsAction'

function AllProductsBtn() {
    const dispatch=useDispatch()
  return (
    <div className="d-grid gap-2" onClick={()=>{dispatch(fetchProducts())}}
    ><Button variant="secondary" size="lg" style={{backgroundColor:"rgba(245, 245, 245, 0.581)",
    color:"black",fontWeight:"bold",
    boxShadow:'0.1rem 0.1rem 0.8rem black',
    position: "fixed",
    left: 0,
    top:"10.5vh",
    left:"10%",
    right:"10%",
   display: "block",
   zIndex: 3
    }}>
    All Products
  </Button>

  </div>
  
  )
}

export default AllProductsBtn