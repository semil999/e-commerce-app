import { getProductData } from '@/Redux/Action/productAction'
import { store, wrapper } from '@/Redux/Store/store'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'

 function App({ Component, pageProps }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductData())
  }, [])
  
  return <>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default wrapper.withRedux(App)
