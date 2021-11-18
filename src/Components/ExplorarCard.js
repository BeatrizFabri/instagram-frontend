import React, { useState } from 'react'

import api from '../Services/api'


function ExplorarCard({ picture, description }) {

    return (
        <div className="pin_container">
            <div className="card card_small">
                <img className="foto" src={picture} alt={description} />
            </div>
        </div>
    )
}
export default ExplorarCard


