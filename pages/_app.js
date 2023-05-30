import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { getProductData } from "@/Redux/Action/ProductAction";
import { store, wrapper } from "@/Redux/Store/store";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import "./../styles/Register.css"
import { getUserData } from "@/Redux/Action/userAction";
import { getLoginUser } from "@/Redux/Action/loginUserAction";

function App({ Component, pageProps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductData());
    dispatch(getUserData())
    dispatch(getLoginUser())
  }, []);

  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></script>
    </>
  );
}

export default wrapper.withRedux(App);
