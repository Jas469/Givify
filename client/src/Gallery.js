import React, { useEffect, useState } from 'react';
// import FloatingText from './FloatingText';
export default function Gallery() {
    const [data, setdata] = useState([])
    useEffect(() => {
        const url = "http://localhost:5000/gallery";
        // const url1 = "http://localhost:3000/api/placementevents";
      
      
        const fetchData = async () => {
          try {
           
            let response = await fetch(url);
            let json = await response.json();
            // console.log(json);
            setdata(json)
           
          } catch (error) {
            // setshow('hidden')
            // setspin('')
            console.log("error", error);
          }
        };
      
        fetchData();
      }, []);
    return (
        <div className='w-[100%] mt-10'>
            <div className='flex justify-evenly'>
            <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                <div className="flex justify-between">
                    <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                    <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                {/* < className="w-full  text-sm rounded-xl py-2 bgimg  text-center text-white"><bu>View more images</bu */}
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>

            <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                <div className="flex justify-between">
                    <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                    <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                {/* < className="w-full  text-sm rounded-xl py-2 bgimg  text-center text-white"><bu>View more images</bu */}
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>

            <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                <div className="flex justify-between">
                    <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                    <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                {/* < className="w-full  text-sm rounded-xl py-2 bgimg  text-center text-white"><bu>View more images</bu */}
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>
            </div>
            <div className='flex justify-evenly'>
            <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                <div className="flex justify-between">
                    <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                    <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                {/* < className="w-full  text-sm rounded-xl py-2 bgimg  text-center text-white"><bu>View more images</bu */}
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>

            <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                <div className="flex justify-between">
                    <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                    <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                {/* < className="w-full  text-sm rounded-xl py-2 bgimg  text-center text-white"><bu>View more images</bu */}
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>

            <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                <div className="flex justify-between">
                    <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                    <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                {/* < className="w-full  text-sm rounded-xl py-2 bgimg  text-center text-white"><bu>View more images</bu */}
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>
            </div>
            <div className='flex justify-evenly'>
            <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                <div className="flex justify-between">
                    <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                    <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                {/* < className="w-full  text-sm rounded-xl py-2 bgimg  text-center text-white"><bu>View more images</bu */}
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>

            <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                <div className="flex justify-between">
                    <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                    <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                {/* < className="w-full  text-sm rounded-xl py-2 bgimg  text-center text-white"><bu>View more images</bu */}
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>

            <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                <div className="flex justify-between">
                    <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                    <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                {/* < className="w-full  text-sm rounded-xl py-2 bgimg  text-center text-white"><bu>View more images</bu */}
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>
            </div>
            <div className='flex justify-evenly'>
            <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                <div className="flex justify-between">
                    <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                    <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                {/* < className="w-full  text-sm rounded-xl py-2 bgimg  text-center text-white"><bu>View more images</bu */}
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>

            <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                <div className="flex justify-between">
                    <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                    <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                {/* < className="w-full  text-sm rounded-xl py-2 bgimg  text-center text-white"><bu>View more images</bu */}
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>

            <div className="flex-col h-[400px] border-2 w-[390px] shadow-xl rounded-lg mb-5 hover:scale-95 transition duration-100 ease-in xsm:h-auto">
                <div className=""><img className="rounded-t w-[350px] m-auto h-48 xsm:h-44" src="img1.png" alt="" /></div>
                <div className="flex justify-between">
                    <div className="bgimg bg-no-repeat text-black px-1 mt-1 text-xs py-1 rounded-tr rounded-br">Category</div>
                    <div className="bgimg  mt-1 text-xs px-1 py-1 rounded-tl rounded-bl">Date</div>
                </div>
                <div className="px-1 mt-1 font-bold text-center xsm:text-sm">Title</div>
                <div className="px-2 xsm:text-xs mt-1 text-justify text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit cum fuga consequuntur ex fugit hic, consequatur ut, labore beatae. Officiis magni, corrupti autmpora distinctio sit cum fuga consequuntur ex mpora distinctio sit </div>
                {/* < className="w-full  text-sm rounded-xl py-2 bgimg  text-center text-white"><bu>View more images</bu */}
                <div><button className='mt-1 py-1 w-[90%] bgimg bg-no-repeat bg-cover rounded-md hover:bg-red-600 hover:text-white'>Donate Now</button></div>
            </div>
            </div>
        </div>
    )
}