import React, { useState } from 'react';
import { Table } from 'antd';
import AddVacancy from '../Add/AddVacancy';
import './Table.css';

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
    {
        key: '3',
        name: 'Lucy',
        age: 30,
        address: '221B Baker Street',
    },
    {
        key: '4',
        name: 'Jack',
        age: 29,
        address: '742 Evergreen Terrace',
    },
    {
        key: '5',
        name: 'Rose',
        age: 35,
        address: '12 Grimmauld Place',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

function VacancyTable() {
    const [addVacancyVisible, setAddVacancyVisible] = useState(false);

    const changeAddVacancy = () => {
        setAddVacancyVisible(!addVacancyVisible);
    };

    const onRowClick = (record) => {
        return {
            onClick: () => {
                console.log('Row clicked:', record);
                setAddVacancyVisible(!addVacancyVisible);
            },
        };
    };

    return (
        <div className="vacancy-table">
            {addVacancyVisible && <AddVacancy onClose={changeAddVacancy} />}
            <h1 className="ant-table-title">Vacancies List</h1>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{ position: ['bottomCenter'] }}
                onRow={onRowClick}
            />
        </div>
    );
}

export default VacancyTable;
