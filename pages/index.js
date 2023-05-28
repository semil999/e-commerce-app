import HeadComponet from '@/Components/HeadComponet'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Home() {
  const products = useSelector(state => state.products.products)
  return (
    <>
      <HeadComponet title={'Home'}/>
      <div className='container py-5'>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4'>
          {
            products?.map((x,i) => {
              return <Link key={i} href={`/products/${x.id}`}>
                <div className='col'>
                  <div className='card'>
                    <img src={x.image} className="img-fluid" alt="this is my image" />
                  </div>
                </div>
              </Link>
            })
          }
        </div>
      </div>
    </>
  )
}
