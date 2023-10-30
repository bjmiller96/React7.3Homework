import {useState} from "react"
import {Link} from "react-router-dom"
import Button from './Button'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => { 
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-red-800 p-4">
            <div onClick={clicked} className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to='/' className="transition duration-200 text-xl tracking-tight hover:text-gray-400">Car Inventory</Link>
            </div>
            <div className="block">
                <button onClick={dropDown} className="transition duration-200 flex items-center px-3 py-2 text-red-800 bg-white rounded border-white hover:text-white hover:bg-gray-400">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            { isVisible ? (
                <div className="w-full block flex-grow items-center">
                    <div className="flex justify-center flex-grow items-center space-x-4">
                        <Link to='/' onClick={clicked}>
                            <Button className="transition duration-200 p-2 m-2 bg-white justify- text-red-800 rounded border-white hover:text-white hover:bg-gray-400">Home</Button>
                        </Link>
                        <Link to='/about' onClick={clicked}>
                            <Button className="transition duration-200 p-2 m-2 bg-white justify- text-red-800 rounded border-white hover:text-white hover:bg-gray-400">About</Button>
                        </Link>
                        <Link to='/contact' onClick={clicked}>
                            <Button className="transition duration-200 p-2 m-2 bg-white justify- text-red-800 rounded border-white hover:text-white hover:bg-gray-400">Contact</Button>
                        </Link>
                        <Link to='/dashboard' onClick={clicked}>
                            <Button className="transition duration-200 p-2 m-2 bg-white justify- text-red-800 rounded border-white hover:text-white hover:bg-gray-400">Dashboard</Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <></>
            ) }
        </nav>
    )     
}

export default Navbar   