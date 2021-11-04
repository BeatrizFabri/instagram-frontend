import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import BottomNav from '../Components/BottomNav'

function Explorar({ cleanUserId }) {
    return (
        <>
            <HeaderNav cleanUserId={cleanUserId}/>
            <BottomNav />
        </>
    )
}

export default Explorar
