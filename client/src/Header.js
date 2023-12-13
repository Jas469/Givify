import React from "react";
import {Link,BrowserRouter,Routes} from 'react-router-dom'
import Login from "./login";
import Sidebar from "./Sidebar";
import Cookies from "universal-cookie";

export default function Header() {
    // const [login, setlogin] = useState(second)
    let cookie=new Cookies()
    // console.log(cookie.get('login'))
    let yes=cookie.get('login')
    return (
        
        <div>

            <div className="flex justify-between shadow-md shadow-neutral-400">
                <div className="">
                    <Link to='/'><img className="h-16 ml-5 py-1" src="logo.png" alt="Givify" /></Link>
                </div>
                <div className="flex justify-center mr-1">
                  

                    <Link to='/about' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto  nobg">About Us</Link>
                    <Link to='/gallery' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto nobg">Gallery</Link>
                    <Link to='/donate_us' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto nobg">Donate Us</Link>
                    <Link to='/contact-us' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto nobg">Contact Us</Link>
                    {/* <Link to='/Ngo_page' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto nobg">Ngo Page</Link>                   */}
                    {/* <Link to='/Adminpage' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto nobg">Admin</Link>                   */}
                   {yes?<Link  to='/Adminpage' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto nobg">Admin</Link>:<Link  to='/login' className="py-3 px-3 hover:border-solid hover:border-b-4 hover:rounded-b-none hover:border-black  cursor-pointer rounded-md  m-auto nobg">Join Us</Link>}

                </div>
            </div>
        </div>
    )
}