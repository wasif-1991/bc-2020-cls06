import React, { useState, useContext } from 'react';
import {TransactionContext} from './transContext';

function Child() {

    const { transactions, addTransactoin } = useContext(TransactionContext);

    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        addTransactoin({
            amount: Number(newAmount),
            desc: newDesc
        })
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }    


    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }    

    return(
        <div className="container">
            <section className="usflogo">
                <img src="https://upshotfirm.com/wp-content/uploads/2017/02/upshotfirm_logo.png"/>
                <hr/>                
            </section>

            <section className="heading">
            <h1>Expense Tracker App</h1>
            </section>

            <section className="yourbal">
                <h4>Your balance</h4>
                <h2>Rs. {getIncome() + getExpense()}</h2>
            </section>

            <section className="baldet">
                <div className="inc">
                    <h3>Income</h3>
                    <p>Rs. {getIncome()} </p>
                </div>

                <div className="exp">
                    <h3>Expense</h3>
                    <p>Rs. {getExpense()} </p>
                </div>
            </section>

            <section className="history">
                <h3>History</h3>
                <hr/>

                <ul className="histlist">
                    {transactions.map((transaction, ind) => {
                        return(
                        <li key={ind}>
                            <span>{transaction.desc}</span>
                            <span>{transaction.amount}</span>
                        </li>
                        )
                    })}
                </ul>            
            </section>

            <section className="transaction">
                <h3>Add a New Transaction</h3>
                <hr/>
                <form className="form" onSubmit={handleSubmit}>
                    <label className="formdescp">
                        Enter Description <br/>
                        <input type="text" required onChange={(ev) => setDesc(ev.target.value)}
                        placeholder="Type Transaction Details" />
                    </label>
                    <br/>

                    <label className="formamnt">
                        Enter Amount <br/>
                        <strong>(For Expense, insert - sign before amount)</strong>
                        <input type="number" required onChange={(ev) => setAmount(ev.target.value)}
                        placeholder="Type Amount" />
                    </label>

                    <input className="button" type="submit" value="Add transaction" />
                </form>
            </section>
            <footer className="ftr">Designed and Developed by
        <a href="https://upshotfirm.com/" target="_blank"> Wasif Ahmed - Upshot Firm</a>.</footer>
        </div>        
    )
}

export default Child;