import React, { useEffect, useState } from 'react';
import DashboardCards from '../../components/Admin/DashboardCards';
import DashboardCharts from '../../components/Admin/DashboardCharts';
import DashboardPoolTable from "../../components/tables/DashboardPoolTable";
import Pagination from '../../components/common/Pagination';
import useGetDashboardData from '../../hooks/admin/dashboard/useGetDashboardData';
import useGetAllPools from '../../hooks/admin/pools/useGetAllPools';
import SearchIcon from '../../assets/SVGs/SearchIcon';

function Dashboard() {

    const [rows, setRows] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const [totalPages, setTotlePage] = useState(0);
    const [totalEntries, setTotalEntries] = useState(0);
    const [searchInput, setSearchInput] = useState('')
    const [totalPools, setTotalPools] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalAgents, setTotalAgents] = useState(0);

    const { data:dashboardData } = useGetDashboardData();
    const { data:poolsData, isLoading, } = useGetAllPools(searchInput, activePage, pageLimit);

    useEffect(() => {
        if (dashboardData?.counts) {
            setTotalPools(dashboardData?.counts?.total_user?.count);
            setTotalUsers(dashboardData?.counts?.total_pool?.count);
            setTotalAgents(dashboardData?.counts?.total_agent?.count);
        }
    }, [dashboardData]);

    useEffect(() => {
        if (poolsData) {
            setRows(poolsData?.data);
            setTotlePage(poolsData?.totalPages);
            setTotalEntries(poolsData?.totalCount);
        }
    }, [poolsData]);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    return (
        <>
            <DashboardCards
                totalPools={totalPools}
                totalUsers={totalUsers}
                totalAgents={totalAgents}
            />
            <DashboardCharts
                totalPools={totalPools}
                totalUsers={totalUsers}
                totalAgents={totalAgents}
            />
            <header className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-4 px-6 rounded-lg flex items-center justify-between">
                <h1 className="text-x font-semibold">All Pools</h1>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            onChange={(e) => setSearchInput(e.target.value)}
                            className='bg-transparent border rounded-lg text-white border-white px-5'
                            placeholder='Search'
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <SearchIcon
                                width={20}
                                height={20}
                                fill={'white'}
                            />
                        </button>
                    </div>
                </div>
            </header>
            <DashboardPoolTable
                loading={isLoading}
                rows={rows}
            />
            <Pagination
                currentPage={activePage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalEntries={totalEntries}
                entriesPerPage={pageLimit}
                setPageLimit={setPageLimit}
            />
        </>
    )
};

export default Dashboard;