import React from 'react'
import SpinnerImage from "../../assets/Spinner.svg"

function Spinner() {
    return (
        <div className='bg-black bg-opacity-30 flex items-center z-[99] justify-center fixed top-0 bottom-0 left-0 right-0'>
            <div>
                <img src={SpinnerImage} alt="loading..." className=' h-52' />
            </div>
        </div>
    )
}

export default Spinner