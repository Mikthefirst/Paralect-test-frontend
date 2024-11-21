import React, { useState, useEffect } from 'react';

import './App.css';
import { Table } from 'antd';
import AddVacancy from './components/Add/AddVacancy'


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

  {
    key: '7',
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




function App() {

  const [AddVacancyVisible, setAddVacancyVisible] = useState(false);

  const changeAddVacancy = () => {
    setAddVacancyVisible(!setAddVacancyVisible);
  }


  const OnRowClick = (record) => {
    return {
      onClick: () => {
        console.log('Row clicked:', record);
        setAddVacancyVisible(!AddVacancyVisible);
      }
    }
  }
  return (
    <div className="App">

      {AddVacancyVisible &&
        (<AddVacancy onClose={changeAddVacancy} />)
      }

      <h1 className="ant-table-title">Vacancies List</h1>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ position: ['bottomCenter'] }}
        onRow={OnRowClick}
      />
    </div>
  );
}

export default App;
