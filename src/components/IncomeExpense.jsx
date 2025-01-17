const IncomeExpense = (props) => {
    const { transactions = [] } = props;

    
    let income = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    
    let expense = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc + Math.abs(transaction.amount), 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money-plus">₹ {income.toFixed(2)}</p>
                <h4>Expense</h4>
                <p className="money-minus">₹ {expense.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default IncomeExpense;


