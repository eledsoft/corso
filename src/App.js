import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/pages/About";
import GithubState from "./components/context/github/GithubState";
import AlertState from "./components/context/alert/AlertState";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";


const App = () => {

    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div className='App'>
                        <NavBar title='Github Finder' icon='fab fa-github'/>
                        <div className='container'>
                            <Alert/>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route exact path='/about' component={About}/>
                                <Route exact path='/user/:login' component={User}/>
                                <Route component={NotFound} />
                            </Switch>


                        </div>

                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
    //}
}

export default App;
