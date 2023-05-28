import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const Slug = () => {
    const products = useSelector(state => state.products.products)
    const router = useRouter()
    const id = router.query.slug

    const singleProduct = products?.find(x => x.id == id)
  return (
    <>
        <div className='container'>
            <div className='text-center'>
              <h2>{singleProduct.exploreTitle}</h2>
              <p>{singleProduct.exploreDetailes}</p>
            </div>
            <div className='row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3'>
              {
                singleProduct?.category?.map((x,i) => {
                  let productImage = x?.colorImages?.find(x => x.selected == true)
                  return <div className='col' key={i}>
                      <div className='card h-100'>
                        <img src={productImage?.image} style={{height : '350px'}} alt="productImage" className='card-img-top' />
                      </div>
                  </div>
                })
              }
            </div>
        </div>
    </>
  )
}

export default Slug