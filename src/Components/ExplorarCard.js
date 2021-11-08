import React, { useState } from 'react'

import api from '../Services/api'


function ExplorarCard({ picture, description }) {

    return (
        <div className='card-container'>
            <div className='card-photo'>
                <img
                    src={picture}
                    alt={description} />
            </div>
        </div>
    )
}
export default ExplorarCard


