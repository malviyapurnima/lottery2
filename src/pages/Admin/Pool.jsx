import React, { useEffect, useState } from 'react';
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import PoolTable from "../../components/tables/PoolTable";
import Pagination from '../../components/common/Pagination';
import AddPoolModel from '../../components/modal/Admin/AddPoolModel';
import UpdatePoolModal from '../../components/modal/Admin/UpdatePoolModal';
import DeletePoolModel from '../../components/modal/Admin/DeletePoolModal';
import useGetAllPools from '../../hooks/admin/pools/useGetAllPools';
import useDeletePool from '../../hooks/admin/pools/useDeletePool';
import useChangePoolState from '../../hooks/admin/pools/useChangePoolState';
import SearchIcon from '../../assets/SVGs/SearchIcon';
import PlusIcon from '../../assets/SVGs/PlusIcon';


function Pool() {

    const queryClient = useQueryClient();
    const [rows, setRows] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const [totalPages, setTotlePage] = useState(0);
    const [totalEntries, setTotalEntries] = useState(0);
    const [searchInput, setSearchInput] = useState('')
    const [showAddModel, setShowAddModel] = useState(false);
    const [showUpdateModel, setShowUpdateModel] = useState(false);
    const [isUpdateData, setIsUpdateData] = useState(null);
    const [showDeleteModel, setShowDeleteModel] = useState(false);
    const [isdeleteId, setIsDeleteId] = useState(null);

    const { mutate: changePoolState } = useChangePoolState();
    const { data: poolsData, isLoading, } = useGetAllPools(searchInput, activePage, pageLimit);
    const { mutate: deletePool } = useDeletePool();

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

    function closeAddModal() {
        setShowAddModel(false);
    }

    async function stateChangeHandler(poolId, status) {
        const postData = {
            id: poolId,
            pool_is_active: status === true ? 1 : 0,
        }
        try {
            await changePoolState(postData, {
                onSuccess: (data) => {
                    if (data.status === true) {
                        toast.success(data.message);
                    } else {
                        toast.error(data.message);
                    }
                },
                onError: (err) => {
                    toast.error(err.message);
                    console.log('onError-err', err);
                },
            })
        } catch (err) {
            console.error('Error change pool state:', err);
        }
    }

    function closeUpdateModal() {
        setShowUpdateModel(false)
        setIsUpdateData(null);
    };
    function editHandler(data) {
        setShowUpdateModel(true);
        setIsUpdateData(data);
    }

    function closeDeleteModal() {
        setShowDeleteModel(false);
        setIsDeleteId(null);
    };
    function deleteHandler(data) {
        setShowDeleteModel(true);
        setIsDeleteId(data);
    }
    async function confirmDelete() {
        try {
            await deletePool(isdeleteId, {
                onSuccess: (data) => {
                    if (data.status === true) {
                        queryClient.invalidateQueries("get_all_pools");
                        setIsDeleteId(null);
                        setShowDeleteModel(false);
                        toast.success(data.message);
                    } else {
                        toast.error(data.message);
                    }
                },
                onError: (err) => {
                    toast.error(err.message);
                    console.log('onError-err', err);
                },
            })
        } catch (err) {
            console.error('Error admin delete pool:', err);
        }
    }

    return (
        <>
            <div className="">
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
                        <button onClick={() => setShowAddModel(true)} className="bg-gradient-to-r from-buttons-darkOrange to-buttons-lightOrange text-white py-2 px-4 rounded-lg flex items-center">
                            <PlusIcon className="mr-2"/>
                            Add Pool
                        </button>
                    </div>
                </header>
                <PoolTable
                    loading={isLoading}
                    rows={rows}
                    updateState={stateChangeHandler}
                    updateEdit={editHandler}
                    updateDelete={deleteHandler}
                />
                <Pagination
                    currentPage={activePage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    totalEntries={totalEntries}
                    entriesPerPage={pageLimit}
                    setPageLimit={setPageLimit}
                />
                <AddPoolModel
                    isOpen={showAddModel}
                    onClose={closeAddModal}
                />
                <UpdatePoolModal
                    isOpen={showUpdateModel}
                    onClose={closeUpdateModal}
                    initialData={isUpdateData}
                />
                <DeletePoolModel
                    isOpen={showDeleteModel}
                    onClose={closeDeleteModal}
                    onConfirm={confirmDelete}
                />
            </div>
        </>
    )
};

export default Pool;