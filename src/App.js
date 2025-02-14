import React from 'react'
import SearchParams from './SearchParams';
import Details from './Details';
import { Router, Link } from '@reach/router';

const App = () => {
    return(
        <React.StrictMode>
            <div>
                <header>
                    <Link to='/'>Adopt me!</Link>
                </header>
                <Router>
                    <SearchParams path='/' />
                    <Details path='/details/:id'/>
                </Router>
            </div>
        </React.StrictMode>
    )
}

export default App;