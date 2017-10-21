import React from 'react';
import {connect } from 'react-redux';


const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Editin the expens wtih id of {props.match.params.id}
        </div>    
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect ()(EditExpensePage);