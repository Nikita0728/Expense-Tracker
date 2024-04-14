import React from 'react';
import { useState } from 'react';

export const Addytransaction = () => {
    const[text, setText]=useState('');
    const[amount, setAmount]= useState(null);
  return (
    <>
    <h3> Add Transaction List </h3>

    <form id="form">
        <div className='form-control'>
       <label htmlFor='text'>Text</label>
        <input type="text" value={text} placeholder='Enter Text...' onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div className='form-control'>
        <label htmlFor="text">Amount<br/>
        (nagative-expense, positive-income)
        </label> 
        <input type="number"  value={amount} onChange={(e)=>setText(e.target.value)} placeholder='Enter Amount...'></input>
        </div>
        <div className='btn'>Add Transaction</div>
    </form>
    
    </>
  )
}
