import React, { Component } from 'react'
import { history } from './history';
import queryString from 'query-string';

export default class SaveToken extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        localStorage.setItem('token', values.JWT)
        history.push('/'+values.route)
    }

    render() {
        return (
            <div>
                Saved token.
            </div>
        )
    }
}
