import { useState,useEffect } from 'react';
import './App.css';
import './index.css';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';

function App() {
    const [transactions, setTransactions] = useState([
        // { id: 1, title: "laptop", amount: -60000 },
        // { id: 2, title: "salary", amount: 250000 },
        // { id: 3, title: "trip-vietnam", amount: -70000 },
        // { id: 4, title: "dress", amount: -1500 },
    ]);
    useEffect(()=>{
        fetch("http://localhost:8000/api/expenses")
        .then(res=>res.json())  
        .then(data=>setTransactions(data)) 
    
    },[])

    const onAddTransaction = (data) => {
        fetch("http://localhost:8000/api/expenses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((newTransaction) => {
                setTransactions([...transactions, newTransaction]);
                console.log("content added to the db successfully")
            })
            .catch((error) => console.error("Error adding transaction:", error));
    };

    const onDeleteTransaction = (id) => {
        fetch(`http://localhost:8000/api/expenses/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.ok) {
                    setTransactions(transactions.filter((eachTransaction) => eachTransaction.id !== id));
                } else {
                    console.error("Error deleting transaction");
                }
            })
            .catch((error) => console.error("Error deleting transaction:", error));
    };


    return (
        <>
            <h1>EXPENSE-TRACKER</h1>
            <div className="container">
                <Balance transactions={transactions} />
                <IncomeExpense transactions={transactions} />
                <AddTransaction onAdd={onAddTransaction} />
                <TransactionList transactions={transactions} onDelete={onDeleteTransaction} />
                
            </div>
        </>
    );
}

export default App;
