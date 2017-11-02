import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
 
export const ExpenseList = (props) => (
    <div>
       {
           props.expenses.length === 0 ? (
            <p>No expenses</p>
           ) : (
            props.expenses.map((expense, index) => {
                return <ExpenseListItem 
                     key={expense.id}
                     {...expense}
                 />;
             })
           )
       }
    </div>
);



// Higher order component - what info from store we want to connect

// const ConnectedExpenseList = connect((state)=> {
//     return {
//         name: 'Andrew', 
//         expenses: state.expenses
//     };
// })(ExpenseList);

// export default ConnectedExpenseList;


const mapStateToProps = (state) => {
    return {
        // expenses: state.expenses, 
        // filters: state.filters
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);



