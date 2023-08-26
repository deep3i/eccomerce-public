import React from 'react'
import Navbar from '../features/navbar/navbar'
import { ProductList } from '../features/product-list/compoents/ProductList'

export const Home = () => {
  return (
    <div>
        <Navbar>
            <ProductList/>
        </Navbar>
    </div>
  )
}
