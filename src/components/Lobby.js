import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Lobby = props => {
    return <div className='center lobby'>
        <h1>Waiting for other players...</h1>
        <Spinner animation="grow" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
}

export default Lobby