import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchCity, setCity } from '../actions/index';

class CountrySearch extends Component {
    constructor() {
        super();
        this.onChangeCity = this._onChangeCity.bind(this);
    }

    componentWillMount() {
        this.props.searchCity(localStorage.getItem('searchQuery'));
    }

    componentDidUpdate() {
        localStorage.setItem('searchQuery', this.props.cityQuery);
    }

    _findCity(str, arr) {
        let result = [];
        const parentOf = arr.filter(item => item.parent === str);

        if (parentOf.length === 0) {
            arr.forEach( item => {
                if (item.child === str) result.push(item.child)
            });
            if (result.length === 0) result.push('Node not found');
        }

        parentOf.forEach(item => {
            const childArr = arr.filter(elem =>  item.child === elem.parent);
            if (childArr.length === 0) result.push(item.child);
            else result.push(...this._findCity(item.child, arr));
        });

        return result
    }

    _onChangeCity() {
        const cityList = this._findCity(this.refs.city.value, this.props.countries);
        this.props.searchCity(this.refs.city.value);
        this.props.setCity(cityList);
    }

    render() {
        return (
            <input ref = "city" className = "search" value = { this.props.cityQuery } onChange = { this.onChangeCity } />
        )
    }
}

function mapStateToProps(state) {
    return {
        countries: state.countries,
        cityQuery: state.cityQuery
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchCity: searchCity,
        setCity: setCity
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CountrySearch);