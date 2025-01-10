import React from 'react';

const TransactionList = (props) => {
    const { transactions, onDelete } = props;

    return (
        <div className="transaction-listing">
            <h2>History</h2>
            <ul>
                {transactions.map((eachTransaction) => (
                    <li key={eachTransaction.id}>
                        {eachTransaction.title}: ₹ {eachTransaction.amount}
                        <button onClick={() => onDelete(eachTransaction.id)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                            ❌ 
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
