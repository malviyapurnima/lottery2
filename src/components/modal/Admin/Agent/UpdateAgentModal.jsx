import React from 'react';
import AgentForm from "../../../form/AgentForm";

function UpdateAgentModal({ isOpen, onClose, initialData }) {

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-primary-dark bg-opacity-50">
                <div className="w-[90%] h-[90%] overflow-auto bg-white p-8 rounded shadow-lg text-center">
                    <h2 className="text-2xl mb-5 text-Primary-dark font-bold">Update Agent</h2>
                    <AgentForm
                        isUpdate={true}
                        initialData={initialData}
                        onClose={onClose}
                    />
                </div>
            </div>
        )
    );
}

export default UpdateAgentModal;