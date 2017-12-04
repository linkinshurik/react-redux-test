import React, { Component } from 'react';
import { connect } from 'react-redux';

class CountryList extends Component {

    renderList() {
        return this.props.cityList.map((country, index) => {
            return (
                <li key= { index } >
                    <a> { country } </a>
                </li>
            )
        })
    }

    render () {
        return (
            <ul className="ul-list">
                { this.renderList() }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        cityList: state.cityList
    }
}

export default connect(mapStateToProps)(CountryList);