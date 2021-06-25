import React from 'react'
import { Prompt } from 'react-router'

function Msg(props) {
    return (
        <div>
            {props.match.url} <br></br>
            {props.match.path}<br></br>
            {props.match.params.datatype}<br></br>
            {props.match.isExact && 'true'}<br></br>
            {props.location.key} <br></br>
            {props.location.pathname} <br></br>
            {props.location.search} <br></br>
            {props.location.key} <br></br>
            <Prompt message="Want to navigate?" />

        </div>
    )
}

export default Msg
