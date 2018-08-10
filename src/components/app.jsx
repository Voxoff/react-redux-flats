import React, { Component } from 'react';
import Redux from 'redux';

import Flat from '../containers/flat';
import Data from '../../data/flats.js';
import FlatList from '../containers/flat_list'
import SimpleMap from '../containers/map'

class App extends Component {
  render() {
    return(
        <div className="main-container">
          <div className="cards">
            <div className="container-fluid">
              <div className="row">
                <FlatList />
              </div>
            </div>
          </div>
          <div className="map">
            <SimpleMap />
          </div>
        </div>
    )
  }
}

export default App;
