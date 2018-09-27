import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const expenseDashboardPage = () => (
    <div>
        This is from my dashboard component.
    </div>
);

const addExpensePage = () => (
    <div>
        This is from my add expense component.
    </div>
);

const editExpensePage = () => (
    <div>
        This is from my edit expense component.
    </div>
);

const helpPage = () => (
    <div>
        This is from my help component.
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={expenseDashboardPage} exact={true}></Route>
            <Route path="/create" component={addExpensePage}></Route>
            <Route path="/edit" component={editExpensePage}></Route>
            <Route path="/help" component={helpPage}></Route>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));
