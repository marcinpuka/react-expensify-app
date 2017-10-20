import React from 'react';
import { connect } from 'react-redux';
 
const ExpenseList = (props) => (
    <div>
       <h1> Expense List  </h1>
       {props.filters.text}
       {props.expenses.length}
    </div>
);



// Higher order component - what info from store we want to connect

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses, 
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseList);



