import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import ExplorarContainer from '../Components/ExplorarContainer'
import BottomNav from '../Components/BottomNav'

function Explorar({ cleanUserId }) {
    return (
        <>
            <HeaderNav cleanUserId={cleanUserId}/>
            <ExplorarContainer />
            <BottomNav />
        </>
    )
}

export default Explorar

