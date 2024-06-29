import React from 'react';

function ViewContactModal({ isOpen, onClose, initialData }) {
    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-primary-dark bg-opacity-50">
                <div className="w-[90%] h-[90%] overflow-auto bg-white p-8 rounded shadow-lg text-center">
                    <h2 className="text-2xl mb-10 text-Primary-dark font-bold">Contact Us</h2>
                    <div>
                        <div className='flex mb-5 ml-20'>
                            <div className='w-[50%] text-left'>
                                <h4 className='font-semibold'>First Name</h4>
                                <p className='text-grey-darker ml-2'>{initialData?.first_name}</p>
                            </div>
                            <div className='w-[50%] text-left'>
                                <h4 className='font-semibold'>Last Name</h4>
                                <p className='text-grey-darker ml-2'>{initialData?.last_name}</p>
                            </div>
                        </div>
                        <div className='flex mb-5 ml-20'>
                            <div className='w-[50%] text-left'>
                                <h4 className='font-semibold'>Email</h4>
                                <p className='text-grey-darker ml-2'>{initialData?.email_id}</p>
                            </div>
                            <div className='w-[50%] text-left'>
                                <h4 className='font-semibold'>Phone Number</h4>
                                <p className='text-grey-darker ml-2'>{initialData?.phone_no}</p>
                            </div>
                        </div>
                        <div className='text-left mb-10 ml-20'>
                            <h4 className='font-semibold'>Message</h4>
                            <div className='border min-h-52 mr-20'>
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

export default ViewContactModal;