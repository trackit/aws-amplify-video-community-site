import React from 'react'
import { IoArrowDown } from 'react-icons/io5'
import './ShowDetailsButton.scss'

const ShowDetailsButton = ({ onClick }: any) => (
    <button onClick={onClick} className="show-details-button">
        <span>
            <IoArrowDown />
        </span>
    </button>
)

export default ShowDetailsButton
