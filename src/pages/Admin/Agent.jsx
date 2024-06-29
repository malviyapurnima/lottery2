import Recat, { useEffect, useState } from 'react';
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import SearchIcon from '../../assets/SVGs/SearchIcon';
import PlusIcon from '../../assets/SVGs/PlusIcon';
import AgentTable from '../../components/tables/AgentTable';
import AddAgentModel from '../../components/modal/Admin/Agent/AddAgentModel';
import DeleteAgentModal from '../../components/modal/Admin/Agent/DeleteAgentModal';
import UpdateAgentModal from '../../components/modal/Admin/Agent/UpdateAgentModal';
import Pagination from '../../components/common/Pagination';
import useGetAllAgents from '../../hooks/admin/agent/useGetAllAgents';
import useChangeAgentStatus from '../../hooks/admin/agent/useChangeAgentStatus';
import useDeleteAgent from '../../hooks/admin/agent/useDeleteAgent';


function Agent() {

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

    const { data: poolsData, isLoading, } = useGetAllAgents(searchInput, activePage, pageLimit);
    const { mutate: changeAgentState } = useChangeAgentStatus();
    const { mutate: deleteAgent } = useDeleteAgent();

    useEffect(() => {
        if (poolsData) {
            setRows(poolsData?.data);
            setTotlePage(poolsData?.totalPages);
            setTotalEntries(poolsData?.Agent_count);
        }
    }, [poolsData]);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    function closeAddModal() {
        setShowAddModel(false);
    }

    async function stateChangeHandler(agentId, status) {
        const postData = {
            id: agentId,
            is_active: status === true ? 1 : 0,
        }
        try {
            await changeAgentState(postData, {
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
            console.error('Error change agent state:', err);
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
            await deleteAgent(isdeleteId, {
                onSuccess: (data) => {
                    if (data.status === true) {
                        queryClient.invalidateQueries("get_all_agents");
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
            console.error('Error admin delete agent:', err);
        }
    }

    return (
        <>
            <header className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-4 px-6 rounded-lg flex items-center justify-between">
                <h1 className="text-x font-semibold">All Agents</h1>
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
                        <PlusIcon className="mr-2" />
                        Add Agent
                    </button>
                </div>
            </header>
            <AgentTable
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
            <AddAgentModel
                isOpen={showAddModel}
                onClose={closeAddModal}
            />
            <UpdateAgentModal
                isOpen={showUpdateModel}
                onClose={closeUpdateModal}
                initialData={isUpdateData}
            />
            <DeleteAgentModal
                isOpen={showDeleteModel}
                onClose={closeDeleteModal}
                onConfirm={confirmDelete}
            />
        </>
    );
};

export default Agent;