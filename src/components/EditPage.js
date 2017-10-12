import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const EditPage = (props) => (
    <div>this is an edit page {props.match.params.id} </div>
);

export default EditPage;