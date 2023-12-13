// import React from "react";
import Header from "./Header";


export default function About_us() {
    return (<>
        <div>
            {/* <Header/> */}
            <div className=" h-30 w-full p-2 mt-3 ml-5 ">
                <div className=' text-left text-4xl font-BlinkMacSystemFont font-extrabold text-blue-900'>ABOUT US</div>
            </div>

            <div className="flex pl-2 h-auto justify-between flex-row mt-3 mx-1 ml-2 border-1 rounded-md flex-wrap ">
                <div className="bgimg bg-no-repeat bg-cover  h-[68vh] pl-3 flex justify-center border-solid w-[56%] rounded-md  ">
                    <img className="  shadow-lg shadow-blue-300 rounded-lg" src="about_pics.jpg" alt='' />
                </div>

                <div className=" m-1 w-[42%] font-serif bg-gradient-to-r from-sky-50 via-sky-100 to-sky-200">
                    <div className=" mt-32 ml-8 text-2xl text-left font-medium text-blue-900 animate-bounce"> IF YOU HAVE A </div>
                    <div className=" ml-12 text-3xl pr-5 text-left font-bold text-blue-900 "> DISABILITY, DON’T
                        LET PEOPLE DIMINISH
                        YOUR ABILITY
                    </div>
                </div>
            </div>

            <div className=" my-8 w-full h-[650px] bg-blue-900 overflow-x-hidden">
                <div className=" p-12 text-center text-white text-5xl font-BlinkMacSystemFont">WHAT WE DO </div>
                <div className=" pb-2 px-2 text-center text-white text-2xl font-serif">Fuelled with enthusiasm, Givify’s founders gave a shape to their dream. Over the last two years, Givify has evolved as a sustainable Indian social institution – committed to do real work on the ground, and make the society and businesses inclusive in the process of bringing change. </div>

                <div className="flex justify-center w-full">
                    <div className="flex flex-wrap w-full h-auto justify-center space-x-14  mt-8 max-w-[1250px] xsm:space-x-2 ">
                        <div className=" flex-col h-[450px] w-[350px] shadow-2xl shadow-white rounded-xl mb-2 bg-white border-b-4 border-blue-900 ">
                            <div className=""><img className="rounded-xl w-[350px] h-[63vh]" src="heal.webp" alt="" /></div>
                            <div className="px-1 mt-0 text-3xl uppercase font-medium font-sans text-blue-900">heal</div>
                        </div>
                        <div className="flex-col h-[450px] w-[350px] shadow-2xl shadow-white rounded-xl mb-2 bg-white border-b-4 border-blue-900">
                            <div className=""><img className="rounded-xl w-[350px] h-[63vh] " src="enrich.webp" alt="" /></div>
                            <div className="px-1 mt-0 text-3xl uppercase font-sans font-medium text-blue-900">Enrich</div>
                            {/* <div className="px-1"></div> */}

                        </div>
                        <div className="flex-col h-[450px] w-[350px] shadow-2xl shadow-white rounded-xl mb-2 bg-white border-b-4 border-blue-900 ">
                            <div className=""><img className="rounded-xl w-[350px] h-[63vh]" src="empower.webp" alt="" /></div>
                            <div className="px-1 mt-0 text-3xl uppercase font-sans font-medium text-blue-900">Empower</div>
                        </div>

                    </div>
                </div>
            </div>

            <div className=" mt-24 w-full h-[90vh] ">
                <div className=" pt-14 px-28 text-center text-3xl text-blue-900 font-medium font-sans">Our programmes aim to amplify and channel the dialogue on
                    achieving our primary goal towards helping our society. </div>
                <div className=" pt-6 pb-2 px-52 text-center  text-xl font-sans">We believe that education is both the means as well as the end to a better life: the means because it empowers an individual to earn his/her livelihood and the end because it increases one’s awareness on a range of issues – from healthcare to appropriate social behaviour to understanding
                    one’s rights – and in the process help him/her evolve as a better citizen. </div>

                <div className=" mt-8 flex justify-center w-full space-x-8">
                    <div className="h-48 w-48 "><img className="rounded-full" src="1.webp" alt=" " /></div>
                    <div className="h-48 w-48 "><img className="rounded-full" src="2.webp" alt=" " /></div>
                    <div className="h-48 w-48 "><img className="rounded-full" src="3.webp" alt=" " /></div>
                    <div className="h-48 w-48 "><img className="rounded-full" src="4.webp" alt=" " /></div>
                    <div className="h-48 w-48 "><img className="rounded-full" src="5.webp" alt=" " /></div>

                </div>

            </div>

            <div className=" mt-10 w-full h-[90vh] bg-zinc-100 border-b-4">
                <div className=" pt-12 text-center text-3xl font-serif font-semibold">How we work </div>
                <div className=" pt-6 px-10 text-center text-lg font-sans">We want you to know exactly how and where your donation is being used. So from the beginning, we’ve kept a few promises. </div>

                <div className=" mt-10 px-4 flex justify-center space-x-10">
                    <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5  ">
                        <div className=" flex justify-center"><img className=" w-52 h-52" src="work1.png" alt="" /></div>
                        <div className="px-1 mt-3 text-lg font-bold">We prove every project</div>
                        <div className="px-1">We track every dollar you raise and show the projects you helped fund with photos and GPS coordinates.</div>
                    </div>
                    <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5  ">
                        <div className=" flex justify-center"><img className=" w-52 h-52" src="work2.avif" alt="" /></div>
                        <div className="px-1 mt-3 text-lg font-bold">We’re an open book</div>
                        <div className="px-1">We’ve consistently received the highest grades available for accountability and transparency.</div>
                    </div>
                    <div className="flex-col h-[350px] w-[300px] rounded-lg mb-5 ">
                        <div className=" flex justify-center "><img className=" w-48 h-48" src="work3.png" alt="" /></div>
                        <div className="px-1 pt-4 mt-3 text-lg font-bold">We work with local partnerships</div>
                        <div className="px-3">We partner with experienced local partners to build sustainable, community-owned water projects.</div>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}