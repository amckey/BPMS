import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import BoatPage from "./pages/BoatPage";

const Routes = () => {
    return (

            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/:section' exact component={Home}/>
                <Route path='/catalogue' exact component={Home}/>
                <Route path='/reviews' exact component={Home}/>
                <Route path='/why_us' exact component={Home}/>
                <Route path='/advantages' exact component={Home}/>
                <Route path='/contacts' exact component={Home}/>
                <Route path='/learn_more' exact component={Home}/>
                <Route path='/get_promotion' exact component={Home}/>
                <Route path='/boats/:boat' exact component={BoatPage}/>
            </Switch>

    )
}

export default Routes;