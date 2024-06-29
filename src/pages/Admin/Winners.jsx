import React, { useEffect, useState } from 'react';
import SearchIcon from '../../assets/SVGs/SearchIcon';
import WinnersTable from '../../components/tables/WinnersTable';
import Pagination from '../../components/common/Pagination';
import useGetAllWinners from '../../hooks/admin/winner/useGetAllWinners';


function Winners() {

    const [rows, setRows] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const [totalPages, setTotlePage] = useState(0);
    const [totalEntries, setTotalEntries] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    const { data: winnersData, isLoading, } = useGetAllWinners(searchInput, activePage, pageLimit);

    useEffect(() => {
        if (winnersData) {
            setRows(winnersData?.data);
            setTotlePage(winnersData?.totalPages);
            setTotalEntries(winnersData?.total_count);
        }
    }, [winnersData]);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };
    
    return (
        <>
            <header className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-4 px-6 rounded-lg flex items-center justify-between">
                <h1 className="text-x font-semibold">All Winners</h1>
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
            <WinnersTable
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

export default Winners;