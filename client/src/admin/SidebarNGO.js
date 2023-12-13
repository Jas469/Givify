// import Header from './Header';
 import {MdDomainVerification , MdOutlineUploadFile, MdOutlineCreateNewFolder} from 'react-icons/md';
 import {BsPersonCircle} from 'react-icons/bs';
 import {RiLogoutCircleRLine} from 'react-icons/ri';
 import { GrClose } from 'react-icons/gr'
 import { ImWarning } from 'react-icons/im'
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";


export default function SidebarNGO() {
    let cookie=new Cookies()
    let navigate=useNavigate()
    const yesbutton = () => {
        cookie.remove('login')
navigate('/login')
       
      }
    return (<>
      <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
        <div className="modal-content bg-orange-400">
          <div className="modal-header">
            <h5 className="modal-title font-semibold flex text-xl  items-center" id="exampleModalLabel"><ImWarning className='mr-2 text-2xl' />Confirmation</h5>
            <button type="button" className="btn-close text-black font-bold" data-bs-dismiss="modal" aria-label="Close"><GrClose /></button>
          </div>
          <div className="modal-body font-medium text-md ">
            Are you sure to log out?
          </div>
          <div className="modal-footer">
            <button type="button" className=" font-medium btn px-3 bg-orange-200" data-bs-dismiss="modal">No</button>
            <button onClick={yesbutton} type="button" className="btn font-medium  bg-orange-500 " data-bs-dismiss="modal">Yes</button>
          </div>
        </div>
      </div>
    </div>
        <div className='h-[579px] w-[240px] flex-col space-y-3 border-2 bg-slate-800  border-solid border-white '>
            <div className="flex text-left hover:bg-cyan-100 hover:text-black rounded-xl  mt-4 text-white" >
                <Link to='/NgoAdmin'>
                    <button className="h-10 text-white text-left w-full bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdDomainVerification size={25}/></div><div className=" hover:text-black ml-4">Dashboard</div></div>
                    </button>
                </Link>
            </div>
            <div className="flex text-left hover:bg-cyan-100 hover:text-black rounded-xl" >
                <Link to='/UpdateProfileNGO'>
                    <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><BsPersonCircle size={23}/></div><div className=" hover:text-black ml-4">Profile</div></div>
                    </button>
                </Link>
            </div>
            <div className="flex text-left hover:bg-cyan-100 hover:text-black rounded-xl" >
                <Link to='/UploadEvent' className="text-white hover:text-black">
                    <button className="h-10 w-full text-white text-left bg-fixed ml-5 "><div className="flex hover:text-black"><div><MdOutlineUploadFile size={25}/></div><div className=" hover:text-black ml-4">Upload Event</div></div>
                    </button>
                </Link>
            </div>
            <div className="flex text-left hover:bg-cyan-100 rounded-xl" >
                <Link to='/GenerateReq'>
                    <button className="h-10 w-full text-white text-left bg-fixed ml-5 hover:text-black"><div className="flex hover:text-black"><div><MdOutlineCreateNewFolder size={25}></MdOutlineCreateNewFolder></div><div className=" hover:text-black ml-4">Generate Requirements</div></div>
                    </button>
                </Link>
            </div>
            <div className="text-white flex text-left hover:bg-cyan-100 rounded-xl" >
       <button type="button" className={` font-semibold  h-10 w-full  text-left bg-fixed ml-5 hover:text-black`} data-bs-toggle="modal" data-bs-target="#exampleModal"><div className='flex '><RiLogoutCircleRLine size={24}></RiLogoutCircleRLine><div className='ml-4'>Log out</div></div></button>
       </div>

          
        </div>

    </>)
}