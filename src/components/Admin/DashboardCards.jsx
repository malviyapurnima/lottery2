import Recat from 'react'
import PoolsIcon from "../../assets/SVGs/PoolsIcon";
import UsersIcon from "../../assets/SVGs/UsersIcon";
import AgentIcon from "../../assets/SVGs/AgentIcon";
import WinnersIcon from "../../assets/SVGs/WinnersIcon";

function DashboardCards({ totalPools, totalUsers, totalAgents }) {
    return (
        <>
            <div className='mb-10'>
                <div className='flex gap-5'>
                    <div className='w-[25%] border drop-shadow-md rounded-lg'>
                        <div className='flex justify-between items-center'>
                            <p className='ml-5 font-medium'>Total Pools</p>
                            <div className='flex justify-center items-center bg-gradient-to-r from-secondary-dark to-secondary-light drop-shadow-md w-16 h-10 rounded-lg'><PoolsIcon /></div>
                        </div>
                        <p className='ml-5 py-7 font-medium text-text-22'>{totalPools}</p>
                    </div>
                    <div className='w-[25%] border drop-shadow-md rounded-lg'>
                        <div className='flex justify-between items-center'>
                            <p className='ml-5 font-medium'>Total Users</p>
                            <div className='flex justify-center items-center bg-gradient-to-r from-secondary-dark to-secondary-light drop-shadow-md w-16 h-10 rounded-lg'><UsersIcon /></div>
                        </div>
                        <p className='ml-5 py-7 font-medium text-text-22'>{totalUsers}</p>
                    </div>
                    <div className='w-[25%] border drop-shadow-md rounded-lg'>
                        <div className='flex justify-between items-center'>
                            <p className='ml-5 font-medium'>Total Agents</p>
                            <div className='flex justify-center items-center bg-gradient-to-r from-secondary-dark to-secondary-light drop-shadow-md w-16 h-10 rounded-lg'><AgentIcon /></div>
                        </div>
                        <p className='ml-5 py-7 font-medium text-text-22'>{totalAgents}</p>
                    </div>
                    <div className='w-[25%] border drop-shadow-md rounded-lg'>
                        <div className='flex justify-between items-center'>
                            <p className='ml-5 font-medium'>Total Winners</p>
                            <div className='flex justify-center items-center bg-gradient-to-r from-secondary-dark to-secondary-light drop-shadow-md w-16 h-10 rounded-lg'><WinnersIcon /></div>
                        </div>
                        <p className='ml-5 py-7 font-medium text-text-22'>1000</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardCards;
