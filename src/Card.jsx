import React from 'react';
import PropTypes from 'prop-types';
import { addSaved, loadSaved, removeSaved } from './localStorage';

import './Card.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSaved: false
    };

    this.savedList = [];

    this.onSaveToggle = this.onSaveToggle.bind(this);
  }

  componentDidMount() {
    this.savedList = loadSaved();

    // check if this.props.name exists in saved list
    if (this.savedList && this.savedList.indexOf(this.props.name) > -1) {
      this.setState({
        isSaved: true
      });
    }
  }

  onSaveToggle() {
    if (this.state.isSaved) {
      removeSaved(this.props.name);
      this.setState({
        isSaved: false
      });
    } else {
      addSaved(this.props.name);
      this.setState({
        isSaved: true
      });
    }
  }

  render() {
    const {authors, downloads, info, name, project_uri, version, version_downloads} =  this.props

    const saveIcon = this.state.isSaved ? <i className='fas fa-heart' /> : <i className='far fa-heart' />

    return (
      <div className='card'>
        <div className='name'>
          <a className='name-link' href={project_uri}>{name}</a>
          <span className='version'>(v{version})</span>
        </div>
        <div className='info'>
          {info}
        </div>
        <div className='footer'>
          <div title='Author(s)'>
            <i className='fas fa-user' /> {authors}
          </div>
          <div title='Downloads (total / version)'>
            <i className='fas fa-download' />
            {downloads} / {version_downloads}
          </div>
        </div>
        <div className='save' onClick={this.onSaveToggle}>
          {saveIcon}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  authors: PropTypes.string,
  downloads: PropTypes.number,
  info: PropTypes.string,
  name: PropTypes.string,
  project_uri: PropTypes.string,
  version: PropTypes.string,
  version_downloads: PropTypes.number
}

export default Card;
