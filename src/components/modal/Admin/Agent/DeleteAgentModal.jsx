import React from 'react';

function DeleteAgentModal({ isOpen, onClose, onConfirm }) {
    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-primary-dark bg-opacity-50">
                <div className="bg-white p-8 rounded shadow-lg text-center">
                    <h2 className="text-2xl mb-1 text-primary-dark font-bold">Delete</h2>
                    <p className="mb-10 text-primary-dark">Are you sure you want to delete Agent?</p>
                    <div className='flex gap-5 justify-center'>
                        <button type="button" onClick={onConfirm} className="text-white bg-primary-light hover:bg-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center">Delete Agent</button>
                        <button type='button' onClick={onClose} className='border text-primary-light bg-white hover:text-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Cancel</button>
                    </div>
                </div>
            </div>
        )
    );
}

export default DeleteAgentModal;