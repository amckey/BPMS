import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import BoatPage from "./pages/BoatPage";

const Routes = () => {
    return (

            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/:section' exact component={Home}/>
                <Route path='/boats/:boat' exact component={BoatPage}/>
            </Switch>

    )
}

export default Routes;