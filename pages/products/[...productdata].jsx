import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./../../styles/ProductData.module.css"
import Link from 'next/link'

const ProductData = () => {
    const products = useSelector(state => state.products.products)
    const router = useRouter()
    const id = router.query.productdata
    const productDataId = id[0]
    const categoryDataId = id[1]

    const productData = products?.find(x => x.id == productDataId)
    const categoryData = productData?.category?.find(x => x.productId == categoryDataId)
    console.log(categoryData)
    const image = categoryData.colorImages.find(x => x.selected == true)
    console.log(image)
  return (
    <>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-4'>
              <div>
                <img src={image.image} className='img-fluid' alt="image" />
              </div>
            </div>
            <div className='col-8'>
              <div>
                <div>
                  <span>Product Name :</span>
                  <h3>{categoryData.productName} ({image.colorName})</h3>
                </div>
                <div>
                  <span>Product Description:</span>
                  <p>{categoryData.description}</p>
                </div>
                <div>
                  <span>Product Highlights:</span>
                  <ul>
                    {
                      categoryData?.highlights?.map((x,i) => {
                        return <li key={i}>{x}</li>
                      })
                    }
                  </ul>
                </div>
                <p>Tags: {categoryData.tages}</p>
                <div>
                  <h6>Color: {image.colorName}</h6>
                  <div className='w-50'>
                    <div className='row row-cols-5 g-3'>
                      {
                        categoryData?.colorImages?.map((x,i) => {
                          return <div className='col' key={i}>
                            <div>
                              <img src={x.image} alt="image" className={`img-fluid rounded-3 ${x.selected == true ? styles.border : ''}`} />
                            </div>
                          </div>
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className={styles.prices}>
                  <span>{categoryData.productPreviousPrice}</span>
                  <span>{categoryData.productCurrentPrice}</span>
                  <p>(Free Shipping)</p>
                </div>
                <div>
                  <button type='button' className={`px-4 me-2 btn rounded-pill ${styles.buttons}`}>Buy Now</button> <button type='button' className={`px-4 me-2 btn rounded-pill ${styles.buttons}`}>Add to Cart</button>
                </div>
                <div>
                  <span>Exciting Offers:</span>
                  <ul>
                    <li>Free keychain with all prepaid orders.</li>
                    <li>1 Free Plain cap with all prepaid orders above ₹549.</li>
                    <li>Buy 2 get 1 Free and buy 3 get 2 Free on all  <Link href={'/products/2'}>Caps</Link> - Prepaid orders only.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProductData