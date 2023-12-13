import { useState } from 'react'
import { BiLogIn } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {cookie} from 'react-cookie'
import Cookies from 'universal-cookie'
export default function Signup() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [confirm, setconfirm] = useState('')
    const [organizationname, setorganizationname] = useState('')
    const [type, settype] = useState('')
   const [spin, setspin] = useState('hidden')
   const [content, setcontent] = useState('py-[6px]')
   const cookie=new Cookies();
   const navigate=useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault();
        setcontent('hidden')
        setspin('loader')
        try {
            const formData = { username, password, confirm, organizationname, type };
            if(username=="" || password=="" || confirm=="" || organizationname=="" ||type==""){
                setcontent('py-[6px]')
                setspin('hidden')
                toast.warning('Every input must be filled', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
    
                });
            }
                else if(password!=confirm){
                    setcontent('py-[6px]')
                    setspin('hidden')
                    toast.warning('Passwords must be same', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
        
                    });
                }
            else{
                
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // const data = await response.json();
                cookie.set("login",true)
                cookie.set(type,true)
                cookie.set('username',username)
                toast.success('Account Created Successfully', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
    
                });
                setcontent('py-[6px]')
                setspin('hidden')
               navigate('/NgoAdmin')
            } else {
                setcontent('py-[6px]')
                setspin('hidden')
                toast.warning('This username already exists', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
    
                });
            }
            }

        
        } catch (error) {
            setcontent('py-[6px]')
            setspin('hidden')
            toast.warning('Technical issues', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            });
            // console.error('Error:', error);
            // alert('An error occurred while sending the request');
        }
    };

    return (<>
        <div className=' w-full h-screen '>
        <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className=" w-[60%] mx-auto  bg-white rounded-lg shadow-xl shadow-cyan-800  xsm:w-[85%] ">
                <div className={`justify-around  h-full  flex  mt-10`}>
                    <div className='w-[50%]  flex justify-center items-center xsm:hidden'>
                        <img src="img3.png" className='h-full' alt="" />
                    </div>
                    <div className="flex-col w-[50%] text-black bgimg rounded-tr-lg rounded-br-lg h-[100%] py-2 px-7  text-xs space-y-1 xsm:w-[100%] xsm:rounded-lg">
                        <div className="font-mono  font-semibold text-2xl tracking-wide text-center">Sign Up</div>

                        <form action="" method="post" className=''>
                            <div className='text-base font-semibold text-left ml-1 mt-3 text-gray-600'>Organization Name </div>
                            <input required={true} value={organizationname} onChange={(e) => { setorganizationname(e.target.value) }} type="text" className='outline outline-1 px-2 rounded-md py-[4px] w-full text-base text-black outline-gray-300 mt-1' placeholder="Enter Organization Name " />
                            <div className='text-base font-semibold text-left ml-1 mt-3 text-gray-600'>Username or Email Address</div>
                            <input required type="text" value={username} onChange={(e) => { setusername(e.target.value) }} className='outline outline-1 px-2 rounded-md py-[4px] w-full text-base text-black outline-gray-300 mt-1' placeholder="Enter User Name " />
                            {/* <div className='text-base mt-3 font-semibold text-left ml-1'>Re-enter Organization Name </div>
                            <input type="text"  className='outline outline-1 px-2 rounded-md py-[4px] w-full text-base text-black outline-gray-300 mt-1' placeholder="Re-enter Organization Name " /> */}
                            <div className='mt-3 font-semibold text-base text-left ml-1 text-gray-600'>Create Password</div>
                            <input required type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} className='outline outline-1 rounded-md py-[4px] px-2 w-full text-base text-black outline-gray-300 mt-1' placeholder="Create Password" />
                            <div className='mt-3 font-semibold text-base text-left ml-1 text-gray-600'>Confirm Password</div>
                            <input required type="password" value={confirm} onChange={(e) => { setconfirm(e.target.value) }} className='outline outline-1 rounded-md py-[4px] px-2 w-full text-base text-black outline-gray-300 mt-1' placeholder="Re-enter Password" />
                            <div className='mt-3 font-semibold text-base text-left ml-1 text-gray-600'>Join as</div>
                            <select name="profession" value={type} onChange={(e) => { settype(e.target.value) }} className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[4px] w-full text-base text-gray-400 outline-gray-300 mt-1">
                                <option className="" value="">--SELECT--</option >
                                <option className="" value="University">University</option >
                                <option className="" value="NGO">NGO</option >
                            </select>


                            <button onClick={handleSignup} className='flex bg-cyan-400 text-black font-semibold w-full justify-center rounded-md mt-4  '> <div className={`flex space-x-1 items-center ${content}`}><BiLogIn className= {`text-lg  text-bluamber-900 `} /> <div className={`flex text-base `}> Create Account</div></div> <span className={` ${spin}`}></span>
 
                            </button>
                        </form>

                        <div className='flex justify-center text-sm text-black'>

                            <div className='mr-1'>Already have an account?</div>
                            <Link to='/login' className='font-semibold' >Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

// mongodb+srv://davindergiri:davinder@cluster0.ohricxd.mongodb.net/test