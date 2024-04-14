import React ,{useContext} from 'react'
import {  GlobalContext } from '../context/GlobalState'

function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
  }
export const TransactionList = () => {
const {transaction, deleteTransaction}=useContext(GlobalContext);
  return (
    <>
        <h3> History </h3>
        <ul className='list'>
          {
            transaction.map(
                transaction=> 
                    <li className= {transaction.amount<0? 'minus':'plus'} key={transaction.id}>{transaction.text}
                    <span>{transaction.amount<0?'-':'+'}${moneyFormatter(Math.abs(transaction.amount))}</span>
                    <button onClick={()=> deleteTransaction(transaction.id)} className='delete-btn'>X</button>
                    </li>)
          }
        </ul>
    </>
  )
}
