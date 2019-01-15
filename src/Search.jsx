import React from 'react';
import axios from 'axios';

import Card from './Card'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import './Search.scss';

const API = 'http://localhost:3000/api/v1/search.json?query=';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      gems: [],
      isLoading: false
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();

    this.setState({
      gems: [],
      isLoading: true
    })

    axios.get(API + this.input.value)
      .then(result => this.setState({
        gems: result.data,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  render() {
    const { error, gems, isLoading} = this.state;

    const errorMsg = error ? (
      <div>Error: {error}</div>
    ) : null;

    const loading = isLoading ? (
      <div className='empty'>
        <span className='fas fa-spinner fa-spin' />
      </div>
    ) : null;

    const empty = !gems.length && !loading ? (
      <div className='empty'>
        Find Ruby Gems by entering a keyword in the search box above (example: Rails).
      </div>
    ) : null

    return (
      <div className='search'>
        <form className='input-container' onSubmit={this.handleSearch}>
          <TextField
            id='search'
            InputProps={{
              startAdornment: <InputAdornment position="start"><i className='fas fa-search' /></InputAdornment>,
            }}
            inputRef={(input) => this.input = input}
            fullWidth
            label='Search Ruby Gems'
            type='search'
            margin='normal'
            variant='outlined'
          />
        </form>

        {errorMsg}
        {loading}
        {empty}

        {gems.map((gem, index) =>
          <Card
            authors={gem.authors}
            downloads={gem.downloads}
            info={gem.info}
            key={index}
            name={gem.name}
            project_uri={gem.project_uri}
            version={gem.version}
            version_downloads={gem.version_downloads} >
          </Card>
        )}
      </div>
    );
  }

}

export default Search;
