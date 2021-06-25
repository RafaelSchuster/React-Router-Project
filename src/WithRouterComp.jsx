import React from 'react'
import Msg from './Msg';
import { withRouter } from 'react-router'

const RouterInfoHoc = withRouter(Msg)

function WithRouterComp() {
    return (
        <div>
            <RouterInfoHoc />
        </div>
    )
}

export default WithRouterComp
