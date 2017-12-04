import React, { Component } from 'react';

import CountryList from '../containers/country-list';
import CountrySearch from '../containers/country-search';

export default class App extends Component {
  render() {
    return (
      <div>
          <CountrySearch/>
          <CountryList/>
      </div>
    );
  }
}
