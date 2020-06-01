import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Users from "./components/users/Users";


class App extends React.Component {
    render() {

        return (
            < div className='App'>
                <NavBar title='Github Finder' icon='fab fa-github'/>
                <div className='container'> <Users/></div>

            </div>
        );
    }
}

export default App;
