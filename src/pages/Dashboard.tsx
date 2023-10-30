// import React from 'react'
import Background from '../assets/images/parking-garage.jpg'
import DataTable from '../components/DataTable'

const Dashboard = () => {
    return (
        <div style={{ backgroundImage: `url(${ Background })`}} className='relative mx-auto bg-cover bg-center bg-fixed h-screen'>
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <div className="flex justify-center place-items-center">
                <div className="z-10 mt-10 pt-10">
                    <DataTable />
                </div>
            </div>
        </div>
    )
}

export default Dashboard