import React from 'react';
import axios from 'axios';
import { loadSaved } from './localStorage';

import Card from './Card'

import './Saved.scss';

const API = 'http://localhost:3000/api/v1/gems/';

class Saved extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gems: []
    };

    this.names = [];
  }

  componentDidMount() {
    this.names = loadSaved();

    const list = []

    this.names.map(name =>
      axios.get('http://localhost:3000/api/v1/gems/' + name + '.json')
        .then(result => this.setState({
          gems: [...this.state.gems, result.data]
        }))
    )
  }

  render() {
    const { gems} = this.state;

    const empty = !gems.length ? (
      <div className='empty'>
        You have no saved gems. Click the heart icon to save/unsave a gem.
      </div>
    ) : null

    return (
      <div className='saved'>

        {empty}

        {this.state.gems.map((gem, index) =>
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

export default Saved;
