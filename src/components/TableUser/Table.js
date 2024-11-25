import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import './Table.css'



const columns = [
    { title: 'Company', dataIndex: 'Company', key: 'company', },
    { title: 'Position', dataIndex: 'Position', key: 'position', },
    { title: 'Salary Range', dataIndex: 'SalaryRange', key: 'salaryRange', },
    { title: 'Status', dataIndex: 'ApplicationStatus', key: 'status', },
    { title: 'Note', dataIndex: 'Note', key: 'note', },
];

function VacancyTable() {
    //fetch vacancies
    const [data, setData] = useState([]); const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchVacancies();
    }, []);
    const fetchVacancies = async () => {
        try {
            const response = await fetch('http://localhost:8080/app/Vacancies',
                { credentials: 'include', });
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching vacancies:', error);
            setLoading(false);
        }
    }

    const [addVacancyVisible, setAddVacancyVisible] = useState(false);

    const changeAddVacancy = () => {
        setAddVacancyVisible(!addVacancyVisible);
    };


    const onRowClick = (record) => {
        return {
            onClick: () => {
                console.log('Row clicked:', record);
            },
        };
    };

    return (
        <div className="vacancy-table">

            {addVacancyVisible && <AddVacancy onClose={changeAddVacancy} />}
            <h1 className="ant-table-title">Vacancies List</h1>
            <Table
                dataSource={data}
                columns={columns}
                loading={loading}
                pagination={{ position: ['bottomCenter'], pageSize: 7 }}
                rowKey={(record) => record._id}
                onRow={onRowClick}
            />
        </div>
    );
}

export default VacancyTable;
