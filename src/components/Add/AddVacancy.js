import React, { useState, useEffect } from "react";
import './AddVacancy.css'

function AddGroup({ onClose }) {
    const [CompanyName, setCompanyName] = useState('');
    const [Position, setPosition] = useState('');
    const [SalaryRange, setSalaryRange] = useState('');
    const [ApplicationStatus, setApplicationStatus] = useState('');
    const [Note, setNote] = useState('');


    const addVacancy = async () => {
        //Company, Position, SalaryRange, ApplicationStatus, Note
        try {
            const res = await fetch(`http://localhost:8080/app/vacancies`,
                {
                    method: 'POST', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ Company: CompanyName, Position, SalaryRange, ApplicationStatus, Note }),
                    credentials: 'include'
                });
            console.log('Status code: ', res.status);
            if (res.status === 200) {
                alert('New vacancy have been added');
                onClose();
            }
        }
        catch (e) {
            console.error(e);
        }
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

                    </div>

                    <button type="submit" className="input-field" onClick={addVacancy}>Send</button>
                </div>
            </div>
        </div>
    );
}



export default AddGroup;