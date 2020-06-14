import React, {useContext, useState} from 'react';
import GithubContext from '../context/github/GithubContext'
import AlertContext from '../context/alert/AlertContext'


const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Scrivi qalcossa prima de strucare el boton !');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    const onChange = (e) => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search user..."
                    value={text}
                    onChange={onChange}
                />
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>

            {githubContext.users.length > 0 &&
            (<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>)
            }
        </div>
    );

}

export default Search;