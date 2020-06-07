import React, {Fragment} from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/pages/About";


class App extends React.Component {
    state = {
        users: [],
        user: {},
        loading: false,
        alert: null
    }
    /*async componentDidMount() {
        console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
        this.setState({loading: true});
        const res = await axios.get('https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}');
        console.log(res.data);
        this.setState({users: res.data, loading: false} );
    }*/

    searchUsers = async text => {
        //console.log(text);
        this.setState({loading: true});
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({users: res.data.items, loading: false});
        console.log(res.data.items);
    }

    //get single user
    getUser = async (username) => {
        //console.log(text);
        this.setState({loading: true});
        const res = await axios.get(`https://api.github.com/users/${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({user: res.data, loading: false});
        console.log(res.data.items);
    }

    //clear users from state
    clearUsers = () => this.setState({users: [], loading: false});

    //Set alert
    setAlert = (msg, type) => {
        this.setState({alert: {msg: msg, type: type}});
        setTimeout(() => this.setState({alert: null}), 1000);
    }


    render() {
        const {users, user, loading} = this.state;

        return (
            <Router>
            <div className='App'>
                <NavBar title='Github Finder' icon='fab fa-github'/>
                <div className='container'>
                    <Alert alert={this.state.alert}/>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={props => (
                            <Fragment>
                                <Search
                                    searchUsers={this.searchUsers}
                                    clearUsers={this.clearUsers}
                                    showClear={users.length > 0 ? true : false}
                                    setAlert={this.setAlert}
                                />
                                <Users loading={loading} users={users}/>
                            </Fragment>
                        )}/>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/user/:login' render={props => (
                        <User {...props} getUser={this.getUser()} user={user} />
                    )
                    } />
                    </Switch>


                </div>

            </div>
            </Router>
        );
    }
}

export default App;
