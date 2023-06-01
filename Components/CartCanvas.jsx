import { useDispatch, useSelector } from "react-redux";
import styles from "./../styles/CartCanvas.module.css"
import { AiOutlineClose } from "react-icons/ai"
import { deleteCartData, updateCartData } from "@/Redux/Action/cartAction";
import { useRouter } from "next/router";
import HeadComponet from "./HeadComponet";

const CartCanvas = () => {
    const router = useRouter()
    const user = useSelector(state => state.user.user)
    let loginData ;
    if (typeof window !== "undefined") {
      loginData = JSON.parse(localStorage.getItem("login")) || ""
    }
    const loginUserData = useSelector(state => state.loginUser.loginUser)
    const loginUser = loginUserData?.find(x => x.id == loginData.id)
    const matchLoginUser = user?.find(x => x.id == loginUser?.userId)
    const cartData = useSelector(state => state.cartData.cartData)
    const dispatch = useDispatch();
    const loginUserCartData = cartData?.filter(x => x.loginUserId == matchLoginUser?.id)

    let totalPrice = 0
    const total = loginUserCartData?.reduce((accumulator,current) => accumulator + current.productCurrentPrice.slice(1) * current.quantity, totalPrice)

    const decreaseQty = (x) => {
        if(x.quantity == 1){
            dispatch(deleteCartData(x.id))
        }
        else{
            x.quantity -= 1;
            dispatch(updateCartData(x))
        }
    }

    const incrementQty = (x) => {
        x.quantity += 1;
        dispatch(updateCartData(x))
    }

    const clear = (id) => {
        dispatch(deleteCartData(id))
    }

  return (
    <>
      <div className={`offcanvas offcanvas-end ${styles.canvas}`} tabIndex="-1" id="cartCanvas" data-bs-backdrop="static" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header border-bottom border-2">
          <h5 id="offcanvasRightLabel" className="fs-3 pt-2">Shopping Cart</h5>
          <button type="button" className={`btn ${styles.closebtn}`} data-bs-dismiss="offcanvas" aria-label="Close"><AiOutlineClose /></button>
        </div>
        <div className="offcanvas-body position-relative" style={{ zIndex: 100 }}>
            {
                loginUserCartData != '' && matchLoginUser ? 
                <>
                    {
                        loginUserCartData?.map((x,i) => {
                            return <div className="d-flex row mb-4" key={i}>
                                <div className="col-3">
                                    <img src={x.image} className="img-fluid" alt="" />
                                </div>
                                <div className="col-9">
                                    <div>
                                        <div>
                                            <p className="mb-0">{x.productName} ({x.imageColor})</p>
                                            <span>{x.productCurrentPrice}</span>
                                        </div>
                                        <div>
                                            <button onClick={() => decreaseQty(x)} className={`${styles.buttons} me-2`}>-</button> <span className="fs-5"> {x.quantity} </span> <button onClick={() => incrementQty(x)} className={`${styles.buttons} ms-2`}>+</button> <button className={styles.removebtn} onClick={() => clear(x.id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <div>
                        <div>
                            <p className="fw-bold"><span>Subtotal : </span><span>₹{total}</span></p>
                        </div>
                        <button onClick={() => router.push('/checkout')} data-bs-dismiss="offcanvas" className="btn btn-success">Checkout</button>
                    </div>
                </>
                : 
                <>
                    <div className="text-center">
                        <h5>Your Cart is Empty.</h5>
                    </div>
                </>
            }
        </div>
      </div>
    </>
  );
};

export default CartCanvas;
