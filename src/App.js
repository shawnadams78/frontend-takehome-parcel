import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from "@reach/router";

import Button from '@material-ui/core/Button';
import Saved from './Saved';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <header>
          <Link className='button-link' to='/'>
            <Button color='primary' variant='contained'>
              Search Gems
            </Button>
          </Link>
          <Link className='button-link' to='/saved-gems'>
            <Button color='primary' variant='contained'>
              Saved Gems
            </Button>
          </Link>
        </header>
        <Router>
          <Search path='/' />
          <Saved path='/saved-gems' />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
