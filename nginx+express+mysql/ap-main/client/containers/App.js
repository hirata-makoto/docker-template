import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'

import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

import {connection} from '../actions'

class App extends Component {
    static propTypes = {
        connection: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.connection()
    }

    render() {
        return (
            <Div>
                <ChatApp >
                    <ChatHeader />
                    <ChatBody />
                    <ChatFooter />
                </ChatApp>
            </Div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch) => (
    {
        connection: connection
    }
)

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))


/**
 * component style
 */
const ChatApp = styled.div`
    width : 600px;
    height: 400px;
    background-color: #ffffff;
    border: 1px solid #c6c6c6;
    border-radius: 4px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 50px;
    justify-self: center;
    align-self: center;
`

const Div = styled.div`
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 100vh;
`
