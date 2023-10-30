// import React from 'react'
import Background from '../assets/images/underground-garage.jpg'

const Contact = () => {
    return (
        <div style={{ backgroundImage: `url(${ Background })`}} className='relative mx-auto bg-cover bg-center bg-fixed'>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="flex justify-center place-items-center h-screen">
                <h1 className="relative z-10 m-5 text-2xl text-white">Please reach out to our Support team if you need help with your Car Inventory account!</h1>
            </div>
        </div>
    )
}

export default Contact