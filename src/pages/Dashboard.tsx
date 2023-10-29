// import React from 'react'
import Background from '../assets/images/parking-garage.jpg'

const Dashboard = () => {
    return (
        <div style={{ backgroundImage: `url(${ Background })`}} className='relative mx-auto bg-cover bg-center bg-fixed'>
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <div className="flex justify-center place-items-center h-screen">
                <h1 className="relative z-10 text-4xl text-white rounded ">Dashboard</h1>
            </div>
        </div>
    )
}

export default Dashboard