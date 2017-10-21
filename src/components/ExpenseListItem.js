// Export a stateless functional component 
// description, amount, createdAt

import React from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense} from '../actions/expenses';

//import correct aciton generator actions/expenses
//{id, description, amount, createdAt}

// dispatch is automatically injected with connect function
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
        <button  onClick={() => {
            dispatch(removeExpense({ id }));
        }}> Remove </button>
    </div>
);

export default connect()(ExpenseListItem);