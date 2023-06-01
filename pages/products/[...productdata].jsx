import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./../../styles/ProductData.module.css"
import Link from 'next/link'
import HeadComponet from '@/Components/HeadComponet'
import Loader from '@/Components/Loader'
import { updateProductData } from '@/Redux/Action/ProductAction'
import Swal from 'sweetalert2'
import CartCanvas from '@/Components/CartCanvas'
import { v4 as uuidv4 } from 'uuid';
import { addCartData, updateCartData } from '@/Redux/Action/cartAction'

const ProductData = () => {
    const products = useSelector(state => state.products.products)
    const user = useSelector(state => state.user.user)
    const loginUserData = useSelector(state => state.loginUser.loginUser)
    let loginData ;
    if (typeof window !== "undefined") {
      loginData = JSON.parse(localStorage.getItem("login")) || ""
    }
    const loginUser = loginUserData?.find(x => x.id == loginData.id)
    const matchLoginUser = user?.find(x => x.id == loginUser?.userId)
    const dispatch = useDispatch()
    const router = useRouter()
    const [isLoader, setisLoader] = useState(true)
    const blanckObj = {id : 0 , productName : '' , productCurrentPrice : '' , image : '' , imageColor : '' , loginUserId : ''}
    const [obj, setobj] = useState({...blanckObj})
    const cartData = useSelector(state => state.cartData.cartData)
    const [firstId, setfirstId] = useState(0)
    const [secondId, setsecondId] = useState(0)

    useEffect(() => {
      if (router.isReady) {
        setfirstId(router.query.productdata[0])
        setsecondId(router.query.productdata[1])
      }
    }, [router.isReady]);

    const productData = products?.find(x => x.id == firstId)
    const categoryData = productData?.category?.find(x => x.productId == secondId)
    const image = categoryData?.colorImages?.find(x => x.selected == true)

    useEffect(() => {
      setisLoader(true)
      setTimeout(() => {
        setisLoader(false)
      }, 1500);
    }, [router.query.productdata])

    const changeColor = (x) => {
      const copyData = {...productData}
      const copyCategoryData = {...categoryData}
      copyCategoryData?.colorImages?.map(e => e.colorId == x.colorId ? e.selected = true : e.selected = false)
      copyData?.category?.map(x => x.productId == copyCategoryData.productId ? x = copyCategoryData : x)
      dispatch(updateProductData(copyData))
    }

    const addtoCartData = () => {
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
        let cart = cartData?.find(x => x.loginUserId == matchLoginUser.id && x.imageColor == image.colorName && x.productName == categoryData.productName)
        if(!cart){
          obj.id = uuidv4()
          obj.productName = categoryData.productName;
          obj.productCurrentPrice = categoryData.productCurrentPrice
          obj.image = image.image;
          obj.imageColor = image.colorName
          obj.loginUserId = matchLoginUser.id
          obj.quantity = 1
          setobj({...obj})
          dispatch(addCartData(obj))
          setobj({...blanckObj})
        }
        else{
          cart.quantity += 1;
          dispatch(updateCartData(cart))
        }
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
                      categoryData?.highlights ?
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
                      categoryData?.tages ? 
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
                      {
                        !matchLoginUser ?
                        <button type='button' className={`px-4 me-2 btn rounded-pill ${styles.buttons}`} onClick={() => addtoCartData()}>Add to Cart</button>:
                        <button type='button' className={`px-4 me-2 btn rounded-pill ${styles.buttons}`} data-bs-toggle='offcanvas' data-bs-target="#cartCanvas" onClick={() => addtoCartData()}>Add to Cart</button>
                      }
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
            <CartCanvas />
          </>
        }
    </>
  )
}

export default ProductData