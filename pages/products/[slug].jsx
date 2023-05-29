import Loader from '@/Components/Loader'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from "./../../styles/Slug.module.css"

const Slug = () => {
    const products = useSelector(state => state.products.products)
    const router = useRouter()
    const id = router.query.slug
    const [isLoader, setisLoader] = useState(true)

    const singleProduct = products?.find(x => x.id == id)

    useEffect(() => {
      setisLoader(true)
      setTimeout(() => {
        setisLoader(false)
      }, 1000);
    }, [id])
    
  return (
    <>
        {
          isLoader == true ?
          <Loader /> :
          <div className='container py-5'>
            <div>
              <h2 className='text-center fw-semibold pb-2'>{singleProduct.exploreTitle}</h2>
              <p className={`pb-4 ${styles.exploreDetailes}`}>{singleProduct.exploreDetailes}</p>
            </div>
            <div className='row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3'>
              {
                singleProduct?.category?.map((x,i) => {
                  let productImage = x?.colorImages?.find(x => x.selected == true)
                  return <div className='col' style={{cursor : 'pointer'}} key={i} onClick={() => router.push(`/products/${id}/${x.productId}`)}>
                      <div className='card h-100'>
                        <img src={productImage?.image} alt="productImage" className={`card-img-top ${styles.image}`} />
                        <div className='card-body'>
                          <h6 className='fw-semibold'>{x.productName.length >= 26 ? `${x.productName.slice(0 , 26)}....` : x.productName}</h6>
                          <p className='mb-0 text-success'><span className='fw-semibold' style={{color : '#0b47a9'}}>Available Color :</span> {x.colorImages.length}</p>
                        </div>
                        <div className='card-footer'>
                          <span className={styles.productPreviousPrice}>{x.productPreviousPrice}</span>
                          <span className={styles.productCurrentPrice}>{x.productCurrentPrice}</span>
                        </div>
                      </div>
                  </div>
                })
              }
            </div>
        </div>
        }
    </>
  )
}

export default Slug