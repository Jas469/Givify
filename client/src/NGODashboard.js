import React, { useEffect, useState } from 'react';
import {FaPeopleGroup} from 'react-icons/fa6';
import {FaUniversity} from 'react-icons/fa';
import {GoCodeOfConduct} from 'react-icons/go';
import {GiTakeMyMoney} from 'react-icons/gi';
import 'react-circular-progressbar/dist/styles.css';

export default function NGODashboard() {
    const [percentage, setPercentage] = useState(0);
    const [percentagechild, setPercentageChild] = useState(0);
    const [percentageuni, setPercentageuni] = useState(0);
    const [percentagedrives, setPercentagedrives] = useState(0);
    const [percentagedon, setPercentagedon] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentagedon < 2000) {
                setPercentagedon(percentagedon + 1);
            }
            if (percentage < 1000) {
                setPercentage(percentage + 1);
            }
            if (percentageuni < 100) {
                setPercentageuni(percentageuni + 1);
            }
            if (percentagedrives < 500) {
                setPercentagedrives(percentagedrives + 1);
            }
            if (percentagechild < 50) {
                setPercentageChild(percentagechild + 1);
            }
        }, 2);
    }, [percentage,percentagedon,percentagedrives,percentageuni,percentagechild]);

    return (
        <div className='w-[100%] bgimg bg-no-repeat bg-cover'>
            <div className='mt-3 font-p text-4xl mb-3 h-12'></div>
            <div className='flex'>
                <div className='w-[50%] text-2xl p-3 mt-3'>
                    <FaPeopleGroup size={90} className='border-2 border-solid border-black m-auto p-2 rounded-full'/>
                    <div className='mt-3'>Organization Members</div>
                        <div style={{ width: 80}} className='m-auto mt-2 font-bold text-3xl'>
                            <div value={percentage}>{`${percentage}`} </div>
                        </div>
                </div>
                <div className='w-[50%] text-2xl p-3 mt-3'>
                    <FaPeopleGroup size={90} className='border-2 border-solid border-black m-auto p-2 rounded-full'/>
                    <div className='mt-3'>Children served</div>
                        <div style={{ width: 80}} className='m-auto mt-2 font-bold text-3xl'>
                            <div value={percentagechild}>{`${percentagechild}`} </div>
                        </div>
                </div>

                <div className='w-[50%] text-2xl p-3 mt-3'>
                    <FaUniversity size={90} className='border-2 border-solid border-black m-auto p-2 rounded-full'/>
                    <div className='mt-3'>University Associations</div>
                        <div style={{ width: 80}} className='m-auto mt-2 font-bold text-3xl'>
                            <div value={percentageuni}>{`${percentageuni}`} </div>
                        </div>
                </div>
                </div>

                <div className='flex'>

                <div className='w-[50%] text-2xl p-3 mt-3'>
                    <GiTakeMyMoney size={90} className='border-2 border-solid border-black m-auto p-2 rounded-full'/>
                    <div className='mt-3'>Donations Received</div>
                        <div style={{ width: 80}} className='m-auto mt-2 font-bold text-3xl'>
                            <div value={percentagedon} className="text-center">{`${percentagedon}`} </div>
                        </div>
                </div>

                <div className='w-[50%] text-2xl p-3 mt-3'>
                    <GoCodeOfConduct size={90} className='border-2 border-solid border-black m-auto p-2 rounded-full'/>
                    <div className='mt-3'>Drives Conducted</div>
                        <div style={{ width: 80}} className='m-auto mt-2 font-bold text-3xl'>
                            <div value={percentagedrives}>{`${percentagedrives}`} </div>
                        </div>
                </div>
            </div>
        </div>
    )
}