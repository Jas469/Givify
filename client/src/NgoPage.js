
import { useEffect, useState } from 'react';
import { MdPeopleAlt } from 'react-icons/md'
import { useSearchParams } from 'react-router-dom';
export default function NgoPage() {
    const [searchParams, setSearchParams] = useSearchParams()
const [alldata, setalldata] = useState([])
    useEffect(() => {

    
        const fetchData = async () => {
          try {
    // console.log(searchParams.get('id'))
    let id=searchParams.get('id')
   
            const response = await fetch('http://localhost:5000/singlepage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id}),
            });
    // console.log(response)
    if(response.ok){
        const data=await response.json()
        console.log(data)
setalldata(data)
    }
    
          } catch (error) {
 
            console.log("error", error);
          }
        };
    
        fetchData();
      }, []);
    return (<>
        <div className=" flex justify-around mt-2">
            <div className="w-full mt-3">
                <div className="text-4xl">{alldata.organizationname}</div>
                {/* main box for content */}
                <div className="mt-4 flex justify-between">
                    {/* LHS */}
                    <div className="w-[30%] bgimg bg-cover">
                        <div className="flex justify-center  ">
                            <img src="/img1.png" alt='uni' height={40} width='100%' className="shadow-md shadow-gray-400" />
                        </div>
                        <div className="mt-4 text-left p-3">
                            <div>E-mail Address : {alldata.email}</div>
                            <div>Joining Date : 23.11.2002</div>
                            <div className="">Description : <div className="text-sm">{alldata.description}</div></div>
                            <div>Location : {alldata.location}</div>
                        </div>

                    </div>


                    {/* RHS */}
                    <div className="w-[68%] ">
                        <div className="w-[98%] m-auto flex h-[170px] justify-between mb-5">
                            <div className="w-[24%] rounded-md shadow-md shadow-gray-400">
                                <div className='m-auto p-2 '>
                                    <MdPeopleAlt size={80} className='flex justify-center border-2 border-solid border-red-800 m-auto mb-2 mt-3'/>
                                </div>
                                <div>
                                    Current Members
                                </div>
                            </div>
                            <div className="w-[24%] rounded-md shadow-md shadow-gray-400">
                                <div className='m-auto p-2 '>
                                    <MdPeopleAlt size={80} className='flex justify-center border-2 border-solid border-red-800 m-auto mb-2 mt-3'/>
                                </div>
                                <div>
                                    Number of Requirements Raised
                                </div>
                            </div>
                            <div className="w-[24%] rounded-md shadow-md shadow-gray-400">
                                <div className='m-auto p-2 '>
                                    <MdPeopleAlt size={80} className='flex justify-center border-2 border-solid border-red-800 m-auto mb-2 mt-3'/>
                                </div>
                                <div>
                                    Number of Requirements Recieved
                                </div>
                            </div>
                            <div className="w-[24%] rounded-md shadow-md shadow-gray-400">
                                <div className='m-auto p-2 '>
                                    <MdPeopleAlt size={80} className='flex justify-center border-2 border-solid border-red-800 m-auto mb-2 mt-3'/>
                                </div>
                                <div>
                                    Raise a Donation
                                </div>
                            </div>
                        </div>
                        <div className="w-[98%] m-auto flex h-[170px] mb-2 justify-between">
                            <div className="w-[24%] rounded-md shadow-md shadow-gray-400">
                                <img src="donate1.png" className="h-full w-full" alt="" />
                            </div>
                            <div className="w-[24%] rounded-md shadow-md shadow-gray-400">
                                <img src="img2.png" className="h-full w-full" alt="" />
                            </div>
                            <div className="w-[24%] rounded-md shadow-md shadow-gray-400">
                                <img src="img1.png" className="h-full w-full" alt="" />
                            </div>
                            <div className="w-[24%] rounded-md shadow-md shadow-gray-400">
                                <img src="img3.png" className="h-full w-full" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>)
}