import {GiFoodTruck,GiDress} from 'react-icons/gi'
import {BiBookReader} from 'react-icons/bi';
import {FaHouseMedicalFlag} from 'react-icons/fa6';
import {BsCloudSun,BsCarFrontFill} from 'react-icons/bs';
import {PiDog} from 'react-icons/pi';
export default function OurServices(){
    return(<>
    <div className="h-auto w-full flex-col mt-3 mb-10">
<div className="flex justify-center"><img src="hr.png" alt="" /></div>
<div className="flex-col  h-auto  w-full ">
  <div className="flex mt-3 justify-evenly">
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md "><button ><GiFoodTruck className='m-auto mt-2' size={70}/><div className='mt-2'>Food</div></button></div>
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md "><button ><BiBookReader className='m-auto mt-2' size={70}/><div className='mt-2'>Education</div></button></div>
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md "><button ><GiDress className='m-auto mt-2' size={70}/><div className='mt-2'>Cloths</div></button></div>
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md "><button ><FaHouseMedicalFlag className='m-auto mt-2' size={70}/><div className='mt-2'>Medical</div></button></div>
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md "><button ><BsCloudSun className='m-auto mt-2' size={70}/><div className='mt-2'>Nature</div></button></div>
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md "><button ><PiDog className='m-auto mt-2' size={70}/><div className='mt-2'>Animal</div></button></div>
    <div className="w-40 h-36 bgimg p-3 text-xl rounded-md "><button ><BsCarFrontFill className='m-auto mt-2' size={70}/><div className='mt-2'>Drives</div></button></div>
   </div>
</div>
     </div> 
    </>)
 }