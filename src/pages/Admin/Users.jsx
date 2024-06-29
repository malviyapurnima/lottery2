import React from 'react';
import SearchIcon from '../../assets/SVGs/SearchIcon';
import UserTable from '../../components/tables/UserTable';
import Pagination from '../../components/common/Pagination';
import { usersMockData } from "../../data/staticData";

function Users() {
    return (
        <>
            <header className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-4 px-6 rounded-lg flex items-center justify-between">
                <h1 className="text-x font-semibold">All Users</h1>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
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
            <UserTable
                rows={usersMockData}
            />
            <Pagination
                currentPage={1}
                totalPages={1}
                // onPageChange={handlePageChange}
                totalEntries={7}
                entriesPerPage={10}
                // setPageLimit={setPageLimit}
            />
        </>
    )
};

export default Users;