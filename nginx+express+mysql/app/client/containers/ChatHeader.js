import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

class ChatHeader extends Component {
    static propTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <Header >
                <Title>{this.props.title}</Title>
            </Header>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    title: state.app.title,
})

export default connect(
    mapStateToProps,
    {}
)(ChatHeader)


/**
 * component style
 */
const Header = styled.div`
    width : 100%;
    height: 100%;
    background-color: #d2d2d2;
`

const Title = styled.div`

`
