import { useSelector } from "react-redux";
import styles from "./../styles/Checkout.module.css"
import HeadComponet from "@/Components/HeadComponet";
import Link from "next/link";

const Checkout = () => {
    const user = useSelector(state => state.user.user)
    let loginData ;
    if (typeof window !== "undefined") {
      loginData = JSON.parse(localStorage.getItem("login")) || ""
    }
    const loginUserData = useSelector(state => state.loginUser.loginUser)
    const loginUser = loginUserData?.find(x => x.id == loginData.id)
    const matchLoginUser = user?.find(x => x.id == loginUser?.userId)
    const cartData = useSelector(state => state.cartData.cartData)
    const loginUserCartData = cartData?.filter(x => x.loginUserId == matchLoginUser?.id)
    
    let totalPrice = 0
    const total = loginUserCartData?.reduce((accumulator,current) => accumulator + current.productCurrentPrice.slice(1) * current.quantity, totalPrice)
    let dateTime = new Date()
    let date = dateTime.getDate()
    let month = dateTime.getMonth()+1
    let year = dateTime.getFullYear()
    let setdate = `${date}/${month}/${year}`

    return (
        <>
            <HeadComponet title={'Checkout'}/>
        {
            !matchLoginUser ?
            <>
                <div className="text-center py-5">
                    <h5>Please <Link href={'/login'}>Click here</Link> to Login</h5>
                </div>
            </>:
            <>
                <div className="container py-5">
                    <div className="shadow-lg pt-5 p-4">
                        <h3 className="text-center text-decoration-underline">INVOICE</h3>
                        <div className="d-lg-flex align-items-lg-center justify-content-lg-between text-lg-start text-center pb-3 pb-lg-0">
                            <div>
                                <img src="/logo.png" alt="" style={{height : '150px' , width : '150px'}}/>
                            </div>
                            <div>
                                <h5>Date : {setdate}</h5>
                                <h5>Invoice No : 1</h5>
                            </div>
                        </div>
                        <div className="border-bottom border-2 pb-4">
                            <p className="fs-5 mb-1"><span className="fw-bold">Name :</span> {matchLoginUser?.name}</p>
                            <p className="fs-5 mb-1"><span className="fw-bold">Email ID :</span> {matchLoginUser?.email}</p>
                            <p className="fs-5 mb-1"><span className="fw-bold">Phone No :</span> {matchLoginUser?.phone}</p>
                            <p className="fs-5 mb-1"><span className="fw-bold">Gender :</span> {matchLoginUser?.gender}</p>
                        </div>
                        <div className="pt-5 d-lg-block d-none">
                            <table className={`${styles.table} table`}>
                                <thead className="text-center">
                                    <tr>
                                        <th>Sr No.</th>
                                        <th>DESCRIPTION</th>
                                        <th>QTY</th>
                                        <th>UNIT PRICE</th>
                                        <th>TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loginUserCartData?.map((x,i) => {
                                            return <tr key={i}>
                                                <td className="text-center">{i + 1}</td>
                                                <td><img src={x.image} alt="" className="img-fluid" style={{height : '40px' , width : '30px'}} /> {x.productName} ({x.imageColor})</td>
                                                <td className="text-center">{x.quantity}</td>
                                                <td className="text-center">{x.productCurrentPrice}</td>
                                                <td className="text-center">₹{x.quantity * x.productCurrentPrice.slice(1)}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-center">SUBTOTAL :</td>
                                        <td className="text-center">₹{total}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-center">DISCOUNT :</td>
                                        <td className="text-center">-0.00</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div>
                                <p className={`${styles.total} text-center text-lg-end`}><span className="fw-bold pe-5 me-4">TOTAL : </span><span className="fw-bold pe-4 me-2">₹{total}</span> </p>
                            </div>
                        </div>
                        <div className="d-lg-none d-block pt-5">
                            <div>
                                <ul className={styles.ul}>
                                    {
                                        loginUserCartData?.map((x,i) => {
                                            return <li key={i}>
                                                <div className="text-center pb-3 mb-3 border-bottom border-1">
                                                    <div>
                                                        <img src={x.image} alt="" className="img-fluid" style={{height : '120px' , width : '90px'}} />
                                                        <p className="mb-0 pt-2 pb-2 fw-semibold">{x.productName} ({x.imageColor})</p>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold"><span className="fw-bold">Quantity : </span>{x.quantity}</p>
                                                        <p className="mb-0 fw-semibold"><span className="fw-bold">Price : </span>{x.productCurrentPrice}</p>
                                                        <p className="mb-0 fw-semibold"><span className="fw-bold">Total Price : </span>₹{x.quantity * x.productCurrentPrice.slice(1)}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <p className={`${styles.total} text-center text-lg-end`}><span className="fw-bold pe-2">TOTAL : </span><span className="fw-bold">₹{total}</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
    </>
  )
}

export default Checkout