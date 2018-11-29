import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Dialogue extends Component {
    static propTypes = {
        user: PropTypes.string.isRequired,
        dialogue: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    }

    render() {
        return (
            <DialogueCompo>
                <Icon user={this.props.user}></Icon>
                <Date>{this.props.date}</Date>
                <Text>{this.props.dialogue}</Text>
            </DialogueCompo>
        )
    }
}

const randomColor = (user)=>{
    user = user.replace(/\./g, '')
    const color = '#' + user.substring(0, 6)
    return color
}

/**
 * style
 */
const DialogueCompo = styled.div`
    margin: 7px;
    display: grid;
    grid-template-columns: 50px 10px 1fr;
    grid-template-rows: 20px 1fr;
`

const Icon = styled.div`
    height:40px;
    width: 40px;
    border-radius: 50%;
    background-color: ${props => randomColor(props.user)};
    grid-column: 1/2;
    grid-row: 1/3;
`

const Date = styled.div`
    grid-column: 3/4;
    grid-row: 1/2;
`

const Text = styled.div`
    grid-column: 3/4;
    grid-row: 2/3;
`
