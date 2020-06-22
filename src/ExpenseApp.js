import React from 'react';

function ExpenseApp() {

    let transactions = [
        { amount: 500, desc: "Cash" },
        { amount: -50, desc: "Cold Drink" },
        { amount: 100, desc: "Deposit" },
        { amount: -200, desc: "Utility Bill" },
    
    ];

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> +500</h3>

            <div className="expense-container">
                <h3>INCOME <br /> 1000</h3>
                <h3>EXPENSE <br /> 500</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="trnsaction-list">
                {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                    )
                })}

            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form">
                <label>
                    Enter Description <br />
                    <input type="text"
                        placeholder="Description"
                        required />
                </label>

                <br />
                <label>
                    Enter Amount <br />
                    <input type="number"
                        placeholder="Amount"
                        required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default ExpenseApp;