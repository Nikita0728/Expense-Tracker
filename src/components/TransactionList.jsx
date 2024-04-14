import React ,{useContext} from 'react'
import { GlobalState, GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const context=useContext(GlobalContext);
    console.log(context);
  return (
    <>
        <h3> History </h3>
        <ul className='list'>
            <li><span>cash</span>
            <button className='dlbutton'>x</button>
            </li>
        </ul>
    </>
  )
}
