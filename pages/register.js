import HeadComponet from "@/Components/HeadComponet";
import { addUserData } from "@/Redux/Action/userAction";
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';

const Register = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const user = useSelector(state => state.user.user)
    const blanckObj = {id : 0 , name : '' , email : '' , password : '' , phone : '' , age : '' , gender : ''}
    const [obj, setobj] = useState({...blanckObj})
    const matchUser = user.find(x => x.email == obj.email)
    let loginData ;
    if (typeof window !== "undefined") {
      loginData = JSON.parse(localStorage.getItem("login")) || ""
    }
    const loginUserData = useSelector(state => state.loginUser.loginUser)
    const loginUser = loginUserData?.find(x => x.id == loginData.id)
    const matchLoginUser = user?.find(x => x.id == loginUser?.userId)

    useEffect(() => {
        if(matchLoginUser){
            router.push('/')
        }
    }, [matchLoginUser])
    
    
    const handleChange = (e) => {
        obj[e.target.name] = e.target.value
        setobj({...obj})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(obj.id == 0){
            if(!matchUser){
                if(obj.email == "" || obj.name == "" || obj.password == "" || obj.phone == ""){
                    Swal.fire(
                        'Please Fill out this Filled?',
                        '',
                        'error'
                    )
                }
                else{
                    obj.id = uuidv4()
                    dispatch(addUserData(obj))
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Registration Successfully.',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setTimeout(() => {
                        router.push('/login');
                    }, 2000);
                }
            }
            else{
                Swal.fire(
                    'You Have Already Registered!',
                    '',
                    'question'
                )
            }
        }
        setobj({...blanckObj})
    }
  return (
    <>
        <HeadComponet title={'Register'}/>
        {
            !matchLoginUser ?
            <>
                <div className="form-bg py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-3 col-lg-6 mx-auto">
                                <div className="form-container shadow-lg">
                                    <h3 className="title">Register</h3>
                                    <form className="form-horizontal" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>User Name</label>
                                            <input type="text" name="name" value={obj.name} className="form-control" placeholder="User Name" onChange={handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Email ID</label>
                                            <input type="email" name="email" value={obj.email} className="form-control" placeholder="Email Address" onChange={handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" name="password" value={obj.password} className="form-control" placeholder="Password" onChange={handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Phone No.</label>
                                            <input type="text" name="phone" value={obj.phone} className="form-control" placeholder="Phone Number" onChange={handleChange}/>
                                        </div>  
                                        <div className="form-group">
                                            <label>Age</label>
                                            <input type="number" name="age" value={obj.age} className="form-control" placeholder="Age" onChange={handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label className="w-100">Gender</label>
                                            <input type="radio" className="me-2" name="gender" checked={obj.gender?.includes('Male')} value='Male' onChange={handleChange}/><span className="radioLable me-3">Male</span>
                                            <input type="radio" className="me-2" name="gender" checked={obj.gender?.includes('Female')} value='Female' onChange={handleChange}/><span className="radioLable">Female</span>
                                        </div>
                                        <div className="check-terms"></div>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn signup" type="submit">Create Account</button>
                                        </div>
                                        <span className="signin-link">Already have an account? Click here to <Link href="/login">Login</Link></span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>:
            <>
                
            </>
        }
    </>
  )
}

export default Register