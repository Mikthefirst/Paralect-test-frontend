import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import VacancyTable from './components/Table/Table';
import Home from './components/UserReg/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vacancies" element={<VacancyTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
