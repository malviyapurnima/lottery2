import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MobileParticipantsTable from "../../components/tables/MobileParticipantsTable";
import Pagination from '../../components/common/Pagination';
import MobileParticipantsModal from "../../components/modal/Admin/MobileParticipants/MobileParticipantsModal";
import useGetMobileParticipantsList from "../../hooks/admin/mobileParticipants/useGetMobileParticipantsList";
import useSendMessageToUser from "../../hooks/admin/mobileParticipants/useSendMessageToUser";


function MobileParticipants() {

    const [rows, setRows] = useState([]);
    const { mutate: sendMessageToUser } = useSendMessageToUser();
    const [activePage, setActivePage] = useState(1);
    const [pageLimit, setPageLimit] = useState(25);
    const [totalPages, setTotlePage] = useState(0);
    const [totalEntries, setTotalEntries] = useState(0);
    const [showViewModel, setShowViewModel] = useState(false);
    const [isViewData, setIsViewData] = useState(null);
    const { data: mobileParticipants, isLoading } = useGetMobileParticipantsList();

    useEffect(() => {
        if (mobileParticipants?.data?.data) {
            setRows(mobileParticipants?.data?.data);
            setTotlePage(mobileParticipants?.data?.last_page);
            setTotalEntries(mobileParticipants?.data?.total);
        }
    }, [mobileParticipants?.data?.data])

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    function viewHandler(data) {
        setShowViewModel(true);
        setIsViewData(data);
    }
    function closeViewModal() {
        setShowViewModel(false)
        setIsViewData(null);
    };

    async function msgSendHandler(toNumber) {
        const postData = {
            to_number: toNumber
        }
        try {
            await sendMessageToUser(postData, {
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

    return (
        <>
            <header className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-4 px-6 rounded-lg flex items-center justify-between">
                <h1 className="text-x font-semibold">All Mobile Participants List</h1>
                <div className="flex items-center space-x-4">
                </div>
            </header>
            <div className="max-h-96 overflow-auto">
                <MobileParticipantsTable
                    loading={isLoading}
                    rows={rows}
                    viewHandler={viewHandler}
                    sendHandler={msgSendHandler}
                />
            </div>
            <Pagination
                currentPage={activePage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalEntries={totalEntries}
                entriesPerPage={pageLimit}
                setPageLimit={setPageLimit}
            />
            <MobileParticipantsModal
                isOpen={showViewModel}
                onClose={closeViewModal}
                initialData={isViewData}
            />
        </>
    )
};

export default MobileParticipants;