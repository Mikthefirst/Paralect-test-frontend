import React, { useState, useEffect } from "react";
import './Form.css'

function ChangeDeleteForm({ onClose, row }) {


    const [CompanyName, setCompanyName] = useState(row.Company);
    const [Position, setPosition] = useState(row.Position);
    const [SalaryRange, setSalaryRange] = useState(row.SalaryRange);
    const [ApplicationStatus, setApplicationStatus] = useState(row.ApplicationStatus);
    const [Note, setNote] = useState(row.Note);
    const id = row._id;
    const Change = async () => {
        try {
            console.log('Row change form: ', row)
            const res = await fetch(`http://localhost:8080/app/Vacancies/`,
                {
                    method: 'PUT', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ Company: CompanyName, Position, SalaryRange, ApplicationStatus, Note, id }),
                    credentials: 'include'
                });
            console.log('Status code: ', res.status);
        } catch (error) { console.error('Error updating vacancy:', error); }
    };

    const Delete = async () => {
        try {
            console.log('Row change del form: ', row)
            if (id) {
                const response = await fetch(`http://localhost:8080/app/Vacancies/${id}`, {
                    method: 'DELETE',
                    credentials: 'include'
                });
                if (response.ok) {
                    const result = await response.json();
                    console.log('Vacancy deleted:', result);
                }
                else {
                    console.error('Failed to delete vacancy');
                }
            }
        }
        catch (error) { console.error('Error:', error); }
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.modal-content')) { onClose(); }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => { document.removeEventListener('mousedown', handleOutsideClick); };
    }, [onClose]);


    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="group">
                    <div className="group-info">
                        <input
                            type="button"
                            className="input-field-delete"
                            value="Delete"
                            onClick={Delete}
                        />
                        <div className="group-change">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Company Name"
                                value={CompanyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Position"
                                value={Position}
                                onChange={(e) => setPosition(e.target.value)}
                            />
                            <input
                                type="text"
                                className="input-field"
                                placeholder="SalaryRange"
                                value={SalaryRange}
                                onChange={(e) => setSalaryRange(e.target.value)}
                            />
                            <input
                                type="text"
                                className="input-field"
                                placeholder="ApplicationStatus"
                                value={ApplicationStatus}
                                onChange={(e) => setApplicationStatus(e.target.value)}
                            />
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Note"
                                value={Note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                            <input
                                type="button"
                                className="input-field"
                                value="Change"
                                onClick={Change}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ChangeDeleteForm;