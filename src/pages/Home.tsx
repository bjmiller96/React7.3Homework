// import React from 'react' 
import Background from '../assets/images/underground-garage.jpg'

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${ Background })`}} className='relative mx-auto bg-cover bg-center bg-fixed'>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="flex justify-center place-items-center h-screen">
                <h1 className="relative z-10 font-semibold text-9xl mb-12 pt-3 p-6 bg-red-800 text-white rounded ">Car Inventory</h1>
            </div>
        </div>
    )
}

export default Home
