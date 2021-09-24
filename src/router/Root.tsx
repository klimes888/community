import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login_Page from '../pages/page_Login/Login_Page';
import Main from '../pages/page_Main/Main';
import Setting from '../pages/page_Setting/Setting';

const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login_Page} />
                <Route path="/setting" component={Setting} />
            </Switch>
        </BrowserRouter>);
}

export default Root;