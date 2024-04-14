import React ,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const {transaction}=useContext(GlobalContext);
  const amounts= transaction.map(transaction=>transaction.amount);
  const total= amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);


  return (
    <>
    <div className='balance'>
        <h4 >Your Balance</h4>
        
    </div>
        <h1 id='blc'>${total}</h1>
    </>
  )
}
