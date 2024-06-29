import React from 'react';

function MobileParticipantsModal({ isOpen, onClose, initialData }) {
    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-primary-dark bg-opacity-50">
                <div className="w-[90%] h-[90%] overflow-auto bg-white p-5 rounded shadow-lg text-center">
                    <h2 className="text-2xl mb-10 text-Primary-dark font-bold">Mobile Participant Details</h2>
                    <div>
                        <div className='flex mb-5 ml-20'>
                            <div className='w-[50%] text-left'>
                                <h4 className='font-semibold'>Uid</h4>
                                <p className='text-grey-darker ml-2'>{initialData?.uid}</p>
                            </div>
                            <div className='w-[50%] text-left'>
                                <h4 className='font-semibold'>To</h4>
                                <p className='text-grey-darker ml-2'>{initialData?.to}</p>
                            </div>
                        </div>
                        <div className='flex mb-5 ml-20'>
                            <div className='w-[50%] text-left'>
                                <h4 className='font-semibold'>From</h4>
                                <p className='text-grey-darker ml-2'>{initialData?.from}</p>
                            </div>
                            <div className='w-[50%] text-left'>
                                <h4 className='font-semibold'>Status</h4>
                                <p className='text-grey-darker ml-2'>{initialData?.status}</p>
                            </div>
                        </div>
                        <div className='flex mb-5 ml-20'>
                            <div className='w-[50%] text-left'>
                                <h4 className='font-semibold'>Cost</h4>
                                <p className='text-grey-darker ml-2'>{initialData?.cost}</p>
                            </div>
                            {/* <div className='w-[50%] text-left'>
                                <h4 className='font-semibold'>Status</h4>
                                <p className='text-grey-darker ml-2'>{initialData?.status}</p>
                            </div> */}
                        </div>
                        <div className='text-left mb-10 ml-20'>
                            <h4 className='font-semibold'>Message</h4>
                            <div className='border min-h-40  mr-20'>
                                <p className='text-grey-darker ml-2'>{initialData?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-left ml-20'>
                        <button type="button" onClick={() => onClose()} className="text-white bg-primary-light hover:bg-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center">Close</button>
                    </div>
                </div>
            </div>
        )
    );
}

export default MobileParticipantsModal;