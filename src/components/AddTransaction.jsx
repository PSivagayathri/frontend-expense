import React, { useState } from 'react';

const AddTransaction = (props) => {
    const {onAdd} = props;
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const onAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({title, amount});
        onAdd({title,amount: +amount});

        setTitle("");
        setAmount("");
    }

    const DeleteTransaction = (props) => {
        const {onDelete} = props;
    }

    return (
        <div className="add-transaction">
            <h3>Add New</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter Title"
                        value={title}
                        onChange={onTitleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="Enter Amount"
                        value={amount}
                        onChange={onAmountChange}
                    />
                </div>
                <button type="submit" id="transac_button" name="transac_button">
                    Add Transaction
                </button>
            </form>
        </div>


    );
};

export default AddTransaction;
