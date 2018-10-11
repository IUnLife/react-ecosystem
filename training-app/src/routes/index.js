import React from 'react';
import {Route} from 'react-router';

import AppComponent from '../App';
import LoginComponent from '../components/Login';

const Routes = () => {
    return (
		<React.Fragment>
        <Route exact path="/" component={AppComponent}/>
				<Route path="/login" component={LoginComponent}/>
    </React.Fragment>
		)
}

export default Routes;

