import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./../../styles/ProductData.module.css"
import Link from 'next/link'
import HeadComponet from '@/Components/HeadComponet'
import Loader from '@/Components/Loader'
import { updateProductData } from '@/Redux/Action/ProductAction'
import Swal from 'sweetalert2'

const ProductData = () => {
    const products = useSelector(state => state.products.products)
    const user = useSelector(state => state.user.user)
    const loginUser = useSelector(state => state.loginUser.loginUser[0])
    const matchLoginUser = user?.find(x => x.id == loginUser?.userId)
    const dispatch = useDispatch()
    const router = useRouter()
    const id = router.query.productdata
    const [isLoader, setisLoader] = useState(true)

    useEffect(() => {
      setisLoader(true)
      setTimeout(() => {
        setisLoader(false)
      }, 1500);
    }, [id])

    const productData = products?.find(x => x.id == id[0])
    const categoryData = productData?.category?.find(x => x.productId == id[1])
    const image = categoryData?.colorImages?.find(x => x.selected == true)

    const changeColor = (x) => {
      const copyData = {...productData}
      const copyCategoryData = {...categoryData}
      copyCategoryData?.colorImages?.map(e => e.colorId == x.colorId ? e.selected = true : e.selected = false)
      copyData?.category?.map(x => x.productId == copyCategoryData.productId ? x = copyCategoryData : x)
      dispatch(updateProductData(copyData))
    }

    const buyProduct = () => {
      if(!matchLoginUser){
        Swal.fire({
          title: 'Please Login!',
          text: "",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {
            router.push('/login')
          }
        })
      }
      else{
        
      }
    }
  return (
    <>
        <HeadComponet title={`${categoryData?.productName == undefined ? 'Loading....' : categoryData?.productName}`}/>
        {
          isLoader == true ?
          <Loader /> :
          <>
            <div className='container py-5'>
              <div className='row'>
                <div className='col-lg-4 col-12'>
                  <div>
                    <img src={image?.image} className='img-fluid' alt="image" />
                  </div>
                </div>
                <div className='col-lg-8 col-12'>
                  <div>
                    <div className='pt-4 pt-lg-0'>
                      <span className={styles.spans}>Product Name :</span>
                      <h3>{categoryData?.productName} ({image?.colorName})</h3>
                    </div>
                    <div>
                      <span className={styles.spans}>Product Description:</span>
                      <p className={styles.description}>{categoryData?.description}</p>
                    </div>
                    {
                      categoryData.highlights ?
                      <div>
                      <span className={styles.spans}>Product Highlights:</span>
                      <ul>
                        {
                          categoryData?.highlights?.map((x,i) => {
                            return <li key={i}>{x}</li>
                          })
                        }
                      </ul>
                    </div> : <></>
                    }
                    {
                      categoryData.tages ? 
                      <p><span className={styles.spans}>Tags:</span> {categoryData?.tages}</p>
                      : <></>
                    }
                    <div className={styles.colorImagesDiv}>
                      <h6 className={styles.spans}>Color: {image?.colorName}</h6>
                      <div className={styles.colorImages}>
                        <div className='row row-cols-5 g-3'>
                          {
                            categoryData?.colorImages?.map((x,i) => {
                              return <div className='col' key={i}>
                                <div>
                                  <img onClick={() => changeColor(x)} src={x.image} alt="image" className={`img-fluid rounded-3 ${x.selected == true ? styles.border : styles.notselected}`} style={x.selected == false ? {cursor : 'pointer'} : {}}/>
                                </div>
                              </div>
                            })
                          }
                        </div>
                      </div>
                    </div>
                    <div className={styles.prices}>
                      <span className={styles.pricesSpan1}>{categoryData?.productPreviousPrice}</span>
                      <p className={styles.productCurrentPrice}>{categoryData?.productCurrentPrice}</p>
                      <p className={styles.priceBage}>(Free Shipping)</p>
                    </div>
                    <div className='pb-4'>
                      <button type='button' onClick={() => buyProduct()} className={`px-4 me-2 btn rounded-pill ${styles.buttons}`}>Buy Now</button> <button type='button' className={`px-4 me-2 btn rounded-pill ${styles.buttons}`}>Add to Cart</button>
                    </div>
                    <div>
                      <span className={styles.spans}>Exciting Offers:</span>
                      <ul>
                        <li>Free keychain with all prepaid orders.</li>
                        <li>1 Free Plain cap with all prepaid orders above ₹549.</li>
                        <li>Buy 2 get 1 Free and buy 3 get 2 Free on all  <Link href={'/products/2'} className={styles.caps}>Caps</Link> - Prepaid orders only.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
    </>
  )
}

export default ProductData