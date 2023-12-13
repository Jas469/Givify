import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
// import SidebarNGO from './';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import SidebarNGO from './admin/SidebarNGO';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie'
export default function UpdateProfileNGO() {
    const [email, setemail] = useState('');
    const [location, setlocation] = useState('');
    const [state, setstate] = useState('Select State');
    const [description, setdescription] = useState('');
    const [contact, setcontact] = useState('');
    const [members, setmembers] = useState('');
    const [children, setchildren] = useState('');
    const [image, setimage] = useState('');
    

let cookies=new Cookies()
const handlestate=(e)=>{
    setstate(e.target.value)
}
    const imageupload=async (e)=>{
        const formdata=new FormData()
        formdata.append("file",e.target.files[0]);
        formdata.append("upload_preset","mystore")
      const res= await fetch("https://api.cloudinary.com/v1_1/desiynbby/image/upload",{
        method:"POST",
        body:formdata,
      })

      const res2=await res.json();
setimage(res2.url)
   return res2.url;
   
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
    //    const username=cookies.get('username');
    //     try {
    //         const formData = { username,image,email,contact,state,location,description,children,members };
    //         console.log(formData)
    //         if(image=="" || email=="" ||  contact=="" ||  state=="" ||  location=="" || description=="" || children=="" || members=="" ){
              
    //             toast.warning('Every input must be filled', {
    //                 position: "top-right",
    //                 autoClose: 1000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    
    //             });
    //         }
               
    //         else{
                
    //         const response = await fetch('http://localhost:5000/profile', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (response.ok) {
    //             // const data = await response.json();
               
    //             toast.success('Details Updated Successfully', {
    //                 position: "top-right",
    //                 autoClose: 1000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    
    //             });
              
    //             // alert(data.message);
    //         } 
    //         }

        
    //     } catch (error) {
    
    //         toast.warning('Technical issues', {
    //             position: "top-right",
    //             autoClose: 1000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,

    //         });
    //         // console.error('Error:', error);
    //         // alert('An error occurred while sending the request');
    //     }
    };


    return (
        <div className='flex'>
            <div className='w-[20%]'><SidebarNGO /></div>
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
            

            <div className='w-full border-2 border-solid border-red-900 ml-5 flex'>
                {/* sidebar */}
                <div className='w-[45%] border-2 border-solid border-red-600 mr-5 '>
                    <div className="user-info mt-10">
                        <img className=" w-[125px] rounded-full border-2 border-solid border-red-600 m-auto mb-4" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                        <div className='text-xl'>Institution Name</div>
                        <div className='text-left mt-2 p-7 ml-8 space-y-4'>
                            <div className='flex'>
                                <div>Profile Picture : </div>
                                <div className='ml-14'>
                                    <input type='file' onChange={imageupload}  className=' border-2 border-solid border-gray-400 rounded-md pl-1' />
                                </div>
                            </div>
                            <div className='flex'>
                                <div>Email address : </div>
                                <div className='ml-14'>
                                    <input type='email' value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter your email' className=' border-2 border-solid border-gray-400 rounded-md pl-1' />
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    Contact :
                                </div>
                                <div className='ml-24'>
                                    <input type='text' value={contact} onChange={(e)=>{setcontact(e.target.value)}} placeholder='Enter your email' className=' border-2 border-solid border-gray-400 rounded-md pl-1' />
                                </div>

                            </div>
                            <div className='flex'>
                                <div>
                                    Location :
                                </div>
                                <div className='ml-24'>
                                    <input type='text' value={location} onChange={(e)=>{setlocation(e.target.value)}} placeholder='Enter your email' className=' border-2 border-solid border-gray-400 rounded-md pl-1' />

                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    State :
                                </div>
                                <div className="btn-group ml-20">
                                    <button type="button" className="btn btn-light dropdown-toggle w-48 shadow-none p-0 ml-10" data-bs-toggle="dropdown" aria-expanded="false">
                                        {state}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Button className="dropdown-item py-0" value={'Assam'} onClick={handlestate}>Assam</Button></li>
                                        <li><hr className="dropdown-divider py-0" /></li>
                                        <li><Button className="dropdown-item py-0" value={'Bihar'} onClick={handlestate}>Bihar</Button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><Button className="dropdown-item py-0" value={'Chandigarh'} onClick={handlestate}>Chandigarh</Button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><Button className="dropdown-item py-0" value={'Delhi'} onClick={handlestate}>Delhi</Button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><Button className="dropdown-item py-0" value={'Daman & Diu'} onClick={handlestate}>Daman & Diu</Button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                    <li><Button className="dropdown-item py-0" value={'Punjab'} onClick={handlestate}>Punjab</Button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}
                                        <li><Button className="dropdown-item py-0" value={'Andhra Pradesh'} onClick={handlestate}>Chandigarh</Button></li>
                                        {/* <li><hr className="dropdown-divider py-0" /></li> */}

                                    </ul>
                                </div>
                            </div>
                        <div>
                            <div>Description</div>
                            <textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} className='border-2 border-solid border-gray-100 w-[95%] p-2' placeholder='Enter the description'></textarea>
                        </div>

                        </div>
                    </div>
                    {/* <nav className="side-menu">
                        <ul className="nav">
                            <li className="active"><a href="#/"><span className="fa fa-user"></span> Profile</a></li>
                            <li><a href="#/"><span className="fa fa-cog"></span> Settings</a></li>
                            <li><a href="#/"><span className="fa fa-credit-card"></span> Billing</a></li>
                            <li><a href="#/"><span className="fa fa-envelope"></span> Messages</a></li>

                            <li><a href="user-drive.html"><span className="fa fa-th"></span> Drive</a></li >
                            <li><a href="#/"><span className="fa fa-clock-o"></span> Reminders</a></li >
                        </ul >
                    </nav > */}
                </div >

            <div className='border-2 border-solid border-gray-600 w-[50%] p-10'>
                <div>
                <div className='flex space-y-4'>
                                <div>
                                    Total members of Organization :
                                </div>
                                <div className='ml-24'>
                                    <input type='text' value={members} onChange={(e)=>{setmembers(e.target.value)}} placeholder='Members of organization' className=' border-2 border-solid border-gray-400 rounded-md pl-1' />

                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    Total Children Served :
                                </div>
                                <div className='ml-24'>
                                    <input type='email' value={children} onChange={(e)=>{setchildren(e.target.value)}} placeholder='Children in Orgsnization' className=' border-2 border-solid border-gray-400 rounded-md pl-1' />

                                </div>
                            </div>
                            <button onClick={handlesubmit} className='flex bg-cyan-400 text-black font-semibold w-full justify-center py-[6px] rounded-md mt-6 space-x-1 items-center'>Save
                            </button>
                </div>
            </div>
            </div >


        </div >
    );
}