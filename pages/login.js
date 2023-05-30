import { FaKey, FaUser } from "react-icons/fa"
import styles from "./../styles/Login.module.css"
import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { v4 as uuidv4 } from 'uuid';
import { addLoginUser, logoutUser } from "@/Redux/Action/loginUserAction"
import { useRouter } from "next/router"
import HeadComponet from "@/Components/HeadComponet"

const Login = () => {
  const user = useSelector(state => state.user.user)
  const loginUser = useSelector(state => state.loginUser.loginUser[0])
  const dispatch = useDispatch()
  const blanckObj = {email : '' , password : ''}
  const [obj, setobj] = useState({...blanckObj})
  const matchLoginUser = user?.find(x => x.id == loginUser?.userId)
  const router = useRouter()
  
  const handleChang = (e) => {
    obj[e.target.name] = e.target.value
    setobj({...obj})
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const matchUser = user?.find(x => x.email == obj.email && x.password == obj.password)
    if(matchUser){
      obj.id = uuidv4()
      obj.userId = matchUser.id
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Login Successfully.',
        showConfirmButton: false,
        timer: 2000
      })
      router.push('/')
      dispatch(addLoginUser(obj))
    }
    else if(obj.email == "" || obj.password == ""){
      Swal.fire(
        'Please Fill out this Filled!',
        '',
        'question'
      )
    }
    else{
      Swal.fire(
        'Please Enter Valid UserName and Password!',
        '',
        'error'
      )
    }
    setobj({...blanckObj})
  }

  const logout = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't to Logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logout has been Successfully.',
          showConfirmButton: false,
          timer: 1500
        })
        dispatch(logoutUser(id))
      }
    })
  }

  return (
    <>
      {
        !matchLoginUser ?
        <>
          <HeadComponet title={'Login'}/>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img src="/logo2.png" alt="" />
            </div>
            <div className={`text-center mt-4 ${styles.name}`}>
                SIGN IN
            </div>
            <form className="p-3 mt-3" onSubmit={handleSubmit}>
                <div className={`${styles.formfield} d-flex align-items-center`}>
                    <FaUser className={styles.fas}/>
                    <input type="email" value={obj.email} name="email" id="email" placeholder="Email ID" onChange={handleChang}/>
                </div>
                <div className={`${styles.formfield} d-flex align-items-center`}>
                    <FaKey className={styles.fas}/>
                    <input type="password" value={obj.password} name="password" id="pwd" placeholder="Password" onChange={handleChang}/>
                </div>
                <button type="submit" className={`${styles.btn} btn mt-3`}>Login</button>
            </form>
            <div className="text-center">
                <span style={{fontSize : '0.9rem'}}>Don't have an Account ?</span> <Link href="/register">Sign up</Link>
            </div>
          </div>
        </> : 
        <>
          <HeadComponet title={'Logout'}/>
          <div className="container text-center py-5">
            <h2 className="pb-3">Your Login has been Successfully.</h2>
            <p className="fw-semibold">Please <Link className="fw-bold" href='/' style={{textDecoration : 'none' , color : '#00ccff'}}>Click here</Link> to Continue Shopping.</p>
            <button className="btn btn-danger" onClick={() => logout(loginUser.id)}>Logout</button>
          </div>
        </>
      }
    </>
  )
}

export default Login