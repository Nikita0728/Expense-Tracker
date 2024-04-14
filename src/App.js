
import React from 'react';
import './components/styles.css'
import './App.css';
import {Header} from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/Income-Expense';
import { TransactionList } from './components/TransactionList';
import { Addytransaction } from './components/Addytransaction';
import { GlobalProvider} from './context/GlobalState';

function App() {
  return (
   
    <GlobalProvider>
      <>
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <Addytransaction/>
      </>
      </GlobalProvider>  );
}

export default App;
