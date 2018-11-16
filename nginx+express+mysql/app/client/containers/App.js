import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Explore from '../components/Explore'
import * as Actions from '../actions'
import { bindActionCreators } from 'redux'

class App extends Component {
    static propTypes = {
        // Injected by React Redux
        errorMessage: PropTypes.string,
        resetErrorMessage: PropTypes.func.isRequired,
        inputValue: PropTypes.string.isRequired,
        // Injected by React Router
        children: PropTypes.node
    }

    handleDismissClick = e => {
        this.props.resetErrorMessage()
        e.preventDefault()
    }

    handleChange = nextValue => {
        this.props.history.push(`/${nextValue}`)
    }

    renderErrorMessage() {
        const { errorMessage } = this.props
        if (!errorMessage) {
            return null
        }

        return (
            <p style={{ backgroundColor: '#e99', padding: 10 }}>
                <b>{errorMessage}</b>
                {' '}
                <button onClick={this.handleDismissClick}>
                    Dismiss
                </button>
            </p>
        )
    }

    render() {
        const { children, inputValue } = this.props
        return (
            <div>
                <Explore value={inputValue}
                    onChange={this.handleChange} />
                <hr />
                {this.renderErrorMessage()}
                {children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    errorMessage: state.errorMessage,
    inputValue: ownProps.location.pathname.substring(1)
})

const mapDispatchToProps = (dispatch) => (
    {
        ...bindActionCreators(Actions, dispatch),
    }
)

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
)
