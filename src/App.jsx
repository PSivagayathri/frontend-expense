import { useState } from 'react';
import './App.css';
import './index.css';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import Balance from './components/balance';
import IncomeExpense from './components/IncomeExpense';

function App() {
    const [transactions, setTransactions] = useState([
        { id: 1, title: "laptop", amount: -60000 },
        { id: 2, title: "salary", amount: 250000 },
        { id: 3, title: "trip-vietnam", amount: -70000 },
        { id: 4, title: "dress", amount: -1500 },
    ]);

    const onAddTransaction = (data) => {
        const modifyData = { ...data, id: Math.random() * 1000 };
        setTransactions([...transactions, modifyData]);
    };

    const onDeleteTransaction = (id) => {
        const newTransactions = transactions.filter((eachTransaction) => eachTransaction.id !== id);
        setTransactions(newTransactions);
    };

    return (
        <>
            <h1>Expense Tracker</h1>
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
