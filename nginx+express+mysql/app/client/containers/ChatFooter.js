import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import * as Actions from '../actions'

class ChatFooter extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputText : ''
        }
    }

    static propTypes = {
        user: PropTypes.string.isRequired,
        sendMessage: PropTypes.func.isRequired
    }

    textChangeHandler(e){
        this.setState({
            inputText: e.target.value
        })
    }

    sendMessage(){
        const user = this.props.user
        const text = this.state.inputText
        this.setState({
            inputText: ''
        })

        this.props.sendMessage(user, text)
    }

    render() {
        return (
            <ChatFooterCompo >
                <Input
                    onChange={e=>this.textChangeHandler(e)}
                    value={this.state.inputText}
                />
                <Button onClick={e=>this.sendMessage(e)}>Send</Button>
            </ChatFooterCompo>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user.name
})

const mapDispatchToProps = (dispatch) => (
    {
        ...bindActionCreators(Actions, dispatch),
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatFooter)


/**
 * component style
 */
const ChatFooterCompo = styled.div`
    width : 100%;
    height: 100%;
    background-color: #ffffff;

    display: grid;
    grid-template-columns: 80% 1fr;
    grid-template-rows: 1fr;
`

const Input = styled.input`
    grid-column: 1/2;
    grid-row: 1/2;
`

const Button = styled.button`
    grid-column: 2/3;
    grid-row: 1/2;
`
