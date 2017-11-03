// Export a stateless functional component 
// description, amount, createdAt

import React from 'react';
import {Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { removeExpense} from '../actions/expenses';
import numeral from 'numeral';

//import correct aciton generator actions/expenses
//{id, description, amount, createdAt}

// dispatch is automatically injected with connect function
const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
        {numeral(amount / 100).format('$0,0.00')} 
        - 
        {moment(createdAt).format('MMMM Do, YYYY')}
        </p>

    </div>
);

export default ExpenseListItem;