import React, { useEffect, useState } from 'react';
import SearchIcon from '../../assets/SVGs/SearchIcon';
import ContactUsTable from '../../components/tables/ContactUsTable';
import ViewContactModal from '../../components/modal/Admin/Contact/ViewContactModal';
import Pagination from '../../components/common/Pagination';
import useGetAllContactUsList from '../../hooks/admin/contact/useGetAllContactUsList';


function ContactUs() {

    const [rows, setRows] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const [totalPages, setTotlePage] = useState(0);
    const [totalEntries, setTotalEntries] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const [showViewModel, setShowViewModel] = useState(false);
    const [isViewData, setIsViewData] = useState(null);

    const { data: contactUsData, isLoading } = useGetAllContactUsList(searchInput, activePage, pageLimit);

    useEffect(() => {
        if (contactUsData) {
            setRows(contactUsData?.data);
            setTotlePage(contactUsData?.totalPages);
            setTotalEntries(contactUsData?.Total_count);
        }
    }, [contactUsData]);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    function closeViewModal() {
        setShowViewModel(false)
        setIsViewData(null);
    };
    function viewHandler(data) {
        setShowViewModel(true);
        setIsViewData(data);
    }

    return (
        <>
            <header className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-4 px-6 rounded-lg flex items-center justify-between">
                <h1 className="text-x font-semibold">All Contact List</h1>
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
            <ContactUsTable
                loading={isLoading}
                rows={rows}
                viewHandler={viewHandler}
            />
            <Pagination
                currentPage={activePage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalEntries={totalEntries}
                entriesPerPage={pageLimit}
                setPageLimit={setPageLimit}
            />
            <ViewContactModal
                isOpen={showViewModel}
                onClose={closeViewModal}
                initialData={isViewData}
            />
        </>
    )
}

export default ContactUs;