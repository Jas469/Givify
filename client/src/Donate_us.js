import { useEffect, useState } from 'react';
import Header from './Header';
import { GoOrganization } from 'react-icons/go';
import Cookies from 'universal-cookie';
import { Link, useNavigate } from 'react-router-dom';


export default function Donate_us() {
  const [data, setdata] = useState([])
  // let cookie=new Cookies()
  let navigate=useNavigate()
  
  useEffect(() => {
    const url = "http://localhost:5000/signup";
    // const url1 = "http://localhost:3000/api/placementevents";


    const fetchData = async () => {
      try {

        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        setdata(json)

      } catch (error) {
        // setshow('hidden')
        // setspin('')
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const showresult = (e) => {
    e.preventDefault()
    // data.map((curr)=>{

    let temp = data.filter((currelem) => {

      return currelem.state == e.target.value;
    })
    // if (temp.length == 0) {
    //   setnorecord('')
    // }
    // else {
    //   setnorecord('hidden')
    // }
    setdata(temp)


  }
  return (<>
    {/* <Header/> */}
    <div className=" mt-2 p-2 flex flex-row w-full h-auto overflow-y-hidden ">

      <div className=" py-3 px-3 flex-col h-[100vh] w-[20%] border-l-2 border-black  bg-slate-800 text-black   xsm:hidden">


        <div className=" w-full mt-8 h-8 items-center">
          <div className=" text-2xl text-center font-bold text-white">Filter Locations</div>
        </div>

        <div className=' mt-2 '>
          <div className='flex-col space-y-2'>

            <div className=' text-white flex-col w-full space-y-3'>
              <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white px-3 pt-3 pb-10 rounded-md hover:bg-violet-200 hover:text-black bg-fixed text-xl font-medium " value='Assam'>Assam</button> </div></div>
              <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white px-3 pt-3 pb-10 rounded-md hover:bg-violet-200 hover:text-black text-xl font-medium " value='Bihar'>Bihar</button> </div></div>
              <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white px-3 pt-3 pb-10 rounded-md hover:bg-violet-200 hover:text-black text-xl font-medium " value='Chandigarh'>Chandigarh</button> </div></div>
              <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white px-3 pt-3 pb-10 rounded-md hover:bg-violet-200 hover:text-black text-xl font-medium " value='delhi'>Delhi</button> </div></div>
              <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white px-3 pt-3 pb-10 rounded-md hover:bg-violet-200 hover:text-black text-xl font-medium " value='Goa'> Goa</button> </div></div>
              <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white px-3 pt-3 pb-10 rounded-md hover:bg-violet-200 hover:text-black text-xl font-medium " value='Gujarat'> Gujarat</button> </div></div>
              <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white px-3 pt-3 pb-10 rounded-md hover:bg-violet-200 hover:text-black text-xl font-medium " value='Punjab'>Punjab</button> </div></div>
              {/* <div className="flex justify-center " ><div><button className="h-10 w-36 text-center text-white px-3 pt-3 pb-10 rounded-md hover:bg-violet-200 hover:text-black text-xl font-medium " value='Chandigarh'>Chandigarh </button> </div></div> */}



            </div>
          </div>

        </div>

      </div>

      <div className="  w-[80%]  bg-zinc-100 border-b-4 ">
        <div className=" pt-12 text-center text-3xl font-serif font-semibold">Showing Filtered locations </div>

        <div className="h-[440px] mt-10 px-4 flex flex-row flex-wrap justify-around  scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-400  text-black  overflow-y-auto ">
          {data.map((da) => {
            return (
              <div className="flex-col h-[380px] w-[300px] rounded-lg mb-5 shadow-2xl hover:scale-95 transition duration-300 ease-in ">
                <div className=" flex justify-center"><img className=" w-52 h-48 mt-2" src="work1.png" alt="" /></div>
                <div className="px-1 mt-4 text-lg font-bold">{da.organizationname}</div>
               {da.description? <div className="px-1 text-sm">{da.description}</div>:<div className="px-1 text-sm">We are an organisation which is working for the well-being of the society and its people.</div>}
            <div className='mt-5'>  <Link to={`/NgoPage?id=${da._id}`}  className='bg-cyan-100 w-full no-underline  rounded-md py-1 px-[120px]'>
                  View
                </Link></div>
            </div>
            )
          })}
          {/* <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5 shadow-2xl hover:scale-95 transition duration-300 ease-in ">
                    <div className=" flex justify-center"><img className=" w-52 h-48 mt-2" src="work1.png" alt="" /></div>
                    <div className="px-1 mt-4 text-lg font-bold">NGO NAME</div>
                    <div className="px-1 text-sm">We are an organisation which is working for the well-being of the society and its people.</div>
                    <button className='bg-cyan-100 w-[90%] mt-5 rounded-md p-1'>
                        View 
                    </button>
    </div>
    <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5 shadow-2xl hover:scale-95 transition duration-300 ease-in ">
                    <div className=" flex justify-center"><img className=" w-52 h-48 mt-2" src="work1.png" alt="" /></div>
                    <div className="px-1 mt-4 text-lg font-bold">NGO NAME</div>
                    <div className="px-1 text-sm">We are an organisation which is working for the well-being of the society and its people.</div>
                    <button className='bg-cyan-100 w-[90%] mt-5 rounded-md p-1'>
                        View 
                    </button>
    </div> */}

        </div>
      </div>
    </div>


  </>)
}