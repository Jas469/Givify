import { useState } from 'react'
import { BiLogIn } from 'react-icons/bi'
import {Link, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {cookie} from 'react-cookie'
import Cookies from 'universal-cookie'

export default function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
const cookie=new Cookies()
const navigate=useNavigate()
    const login=async(e)=>{
        e.preventDefault();
        try {
            const formData = { username, password};
            if(username==="" || password===""){
          
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
                
            else{
                
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {

                const data = await response.json();
                // console.log(data)
                cookie.set("login",true)
                cookie.set(data.type,true)
                cookie.set('username',username)
                toast.success('Login Successfully', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
    
                });    
                navigate('/Adminpage')         
            } else {              
                toast.warning('Invaild Credentials', {
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
            
            toast.warning('Technical issues', {
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
   

    return (<>
        <div className=' w-full h-screen'>
            {/* <Navbarres /> */}
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
            <div className=" h-[60%] w-[50%] mx-auto  bg-white rounded-lg shadow-xl shadow-cyan-800  xsm:w-[85%]">
                {/* <div className={`text-center  justify-center items-center h-full w-full flex absolute top-0 left-0 z-10  `}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> */}
                <div className={`justify-around  h-full  flex  mt-20`}>
                    <div className='w-[50%]  flex justify-center items-center xsm:hidden'>
                        <img src="img3.png" className='h-full' alt="" />
                    </div>
                    <div className="flex-col w-[50%] text-black bgimg rounded-tr-lg rounded-br-lg h-[100%] py-2 px-3  text-xs space-y-1 xsm:w-[100%] xsm:rounded-lg">
                        <div className="font-mono  font-semibold text-2xl tracking-wide text-center">Login</div>

                        <form action="" method="post">
                            <div className='text-base  font-semibold text-left ml-1'>User Id</div>
                            <input type="text" onChange={(e)=>{setusername(e.target.value)}} className='outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-amber-800 outline-gray-300 mt-1' placeholder="Enter User Id" />
                            <div className='mt-2   font-semibold text-base text-left ml-1'>Password</div>
                            <input type="password" onChange={(e)=>{setpassword(e.target.value)}} className='outline outline-1 rounded-sm py-[6px] px-2 w-full text-base text-amber-800 outline-gray-300 mt-1' placeholder="Enter Password" />

                           
                            <button onClick={login} className='flex bg-cyan-400 text-black font-semibold w-full justify-center py-[6px] rounded-md mt-6 space-x-1 items-center'><BiLogIn className=' text-lg mt-[2px] text-bluamber-900' /> <div className='flex text-base'> Login</div>
                            </button>
                        </form>
                        <div className='flex justify-center pt-9  text-sm'>

                            <div className='mr-1'>Don't have an account?</div>
                            <Link to='/Signup' className='font-semibold' >Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

// mongodb+srv://davindergiri:davinder@cluster0.ohricxd.mongodb.net/test