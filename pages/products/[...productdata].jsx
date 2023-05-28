import { useRouter } from 'next/router'
import React from 'react'

const ProductData = () => {
    const router = useRouter()
    const id = router.query.productdata[1]
    console.log(id)
  return (
    <>
        <h1>ProductData</h1>
    </>
  )
}

export default ProductData