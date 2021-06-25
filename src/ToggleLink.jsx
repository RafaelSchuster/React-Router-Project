import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'
import { Link } from 'react-router-dom'


export default class ToggleLink extends Component {
    navigate = (history) => {
        history.push(this.props.to)
    }
    render() {
        return <Route path={this.props.to} exact={this.props.exact} children={routeProps => {
            const baseClasses = this.props.className || 'm-2 btn btn-block'
            const activeClass = this.props.activeClass || 'btn-primary'
            const inActiveClass = this.props.inActiveClass || 'btn-secondary'

            const combineClasses = `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`
            // return <Link to={this.props.to} className={combineClasses}>{this.props.children}</Link>
            return <button className={combineClasses} onClick={() => this.navigate(routeProps.history)}>{this.props.children}</button>

        }} />


    }
}
