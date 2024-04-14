import React from 'react'

export const IncomeExpense = () => {
  return (
    <div className='inc-exp-container'> 
       <div > <h4>Income</h4> 
       <p className='money inc' id="moneyp">$260.90</p>
       </div>
        
        <div> <h4>Expense</h4>  
        <p className='money exp'  id="moneym">$590.40</p>
        </div>
    </div>
  )
}
