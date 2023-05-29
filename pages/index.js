import HeadComponet from '@/Components/HeadComponet'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import { useSelector } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaRupeeSign, FaShippingFast, FaTshirt } from 'react-icons/fa';

export default function Home() {
  const products = useSelector(state => state.products.products)
  const carousel = ['https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/1.webp' , 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/2.webp' , 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/3.webp']
  const details = [
    {
      icon : <FaTshirt />,
      title : 'Premium Tshirts',
      details : 'Our T-Shirts are 100% made of cotton.'
    },
    {
      icon : <FaShippingFast />,
      title : 'Free Shipping',
      details : 'We ship all over India for FREE.'
    },
    {
      icon : <FaRupeeSign />,
      title : 'Exciting Offers',
      details : 'We provide amazing offers & discounts on our products.'
    }
  ]
  return (
    <>
      <HeadComponet title={'E-commerce'}/>
      <div className='container py-5'>
        <div>
        <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} showArrows={true}>
          {
            carousel.map((x,i) => {
              return <div key={i}>
                  <img src={x} />
              </div>
            })
          }
        </Carousel>
        </div>
        <div>
          <h4 className='text-center py-4 fs-3 fw-bold'>COLLECTIONS</h4>
        </div>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4'>
          {
            products?.map((x,i) => {
              return <Link key={i} href={`/products/${x.id}`}>
                <div className='col'>
                  <div className='card'>
                    <img src={x.image} className="card-img-top card-img-bottom" alt="this is my image" />
                  </div>
                </div>
              </Link>
            })
          }
        </div>
        <div className='row row-cols-1 text-center row-cols-lg-3 g-4 pt-5 pb-2'>
          {
            details.map((x,i) => {
              return <div className='col' key={i}>
                <div className='card py-2 h-100 px-2 rounded-3' style={{border : '1px solid #0b47a9'}}>
                  <div className='fs-1' style={{color : '#0b47a9'}}>{x.icon}</div>
                  <h5 className='py-2'>{x.title}</h5>
                  <p>{x.details}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}
