import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/page_Login/Login';
import Main from '../pages/page_Main/Main';
import Setting from '../pages/page_Setting/Setting';

const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/setting" component={Setting} />
            </Switch>
        </BrowserRouter>);
}

export default Root;