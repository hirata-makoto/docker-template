import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import Dialogue from '../components/Dialogue'

class ChatBody extends Component {
    static propTypes = {
        chats: PropTypes.array
    }

    render() {
        const dialogues = this.props.chats.map((chat, i) => {
            return (
                <Dialogue
                    user    ={chat.user}
                    dialogue={chat.dialogue}
                    date    ={chat.date}
                    key     ={i}
                />
            )
        })
        return (
            <ChatBodyCompo >
                {dialogues}
            </ChatBodyCompo>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    chats: state.chats,
})

export default connect(
    mapStateToProps,
    {}
)(ChatBody)


/**
 * component style
 */
const ChatBodyCompo = styled.div`
    width : 100%;
    height: 100%;
    background-color: #ffffff;
`

const Title = styled.div`

`
