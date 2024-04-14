import React from 'react';
import './components/styles.css'
import './App.css';
import {Header} from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/Income-Expense';

function App() {
  return (
    <div>
      <Header/>
      <Balance/>
      <IncomeExpense/>
    </div>
  );
}

export default App;
