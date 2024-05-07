import React from 'react'

const Button = ({ label, iconURL }) => {
    return (
        <>
            <button className='px-7 py-4 rounded-full
    flex justify-center items-center gap-2 bg-coral-red text-white border border-coral-red'>
                {label}
                <img src={iconURL} alt={label}
                    className='ml-2 rounded-full w-5 h-5'>
                </img>
            </button>
        </>
    )
}

export default Button