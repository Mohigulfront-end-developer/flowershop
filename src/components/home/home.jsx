import React from 'react'
import HomePlugn from './homePlugn'
import Product from "./product/product"

export default function home() {
  return (
    <div className='home'>
      <HomePlugn />
      <Product />
    </div>
  )
}
