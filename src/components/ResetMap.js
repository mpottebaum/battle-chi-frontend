import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { resetMap } from '../actions/zones'

class ResetMap extends React.Component {

    handleClick = () => {
        this.props.resetMap()
    }

    render() {
        return <Button
                onClick={this.handleClick}
                variant='outline-secondary'
                size='lg'
                style={{marginBottom: '10px', marginTop: '5px', marginLeft: '5px'}}
                >Reset Map</Button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetMap: () => dispatch(resetMap())
    }
}

export default connect(null, mapDispatchToProps)(ResetMap)