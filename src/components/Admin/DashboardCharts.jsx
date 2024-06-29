import Recat from 'react';
import PieChart from '../../components/charts/PieChart';
import RadialBarChart from '../../components/charts/RadialBarChart';

function DashboardCharts({ totalPools, totalUsers, totalAgents }) {
    return (
        <>
            <div className='flex mb-10 gap-5'>
                <div className='flex justify-around w-[60%] h-[200px] border shadow-md'>
                    <div>
                        <p className='text-text-lg m-5'>Total Overview</p>
                        <div className='ml-5 mt-12'>
                            <div className='flex items-center gap-2 mb-3'>
                                <div className='bg-secondary-dark h-5 w-10'></div>
                                <p className='text-black text-sm'>Total Sell Lottery</p>
                            </div>
                            <div className='flex items-center gap-2  mb-3'>
                                <div className='bg-primary-light h-5 w-10'></div>
                                <p className='text-black text-sm'>Total Pool</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='bg-primary-dark h-5 w-10'></div>
                                <p className='text-black text-sm'>Total Winners</p>
                            </div>
                        </div>
                    </div>
                    <PieChart />
                </div>
                <div className='w-[40%] h-[200px] border shadow-md'>
                    <RadialBarChart
                        totalUsers={totalUsers}
                    />
                </div>
            </div>
        </>
    );
};

export default DashboardCharts;