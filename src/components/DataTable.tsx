import { useState } from 'react'
import Button from './Button'
import Modal from './Modal'

const DataTable = () => {
    let [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            />
            <div className="flex flex-row">
                <div>
                    <button className="p-3 bg-white rounded m-3 hover:bg-gray-400 hover:text-red-800" onClick={() => handleOpen()}>Add New Vehicle</button>
                </div>
                <Button className="p-3 bg-white rounded-m-3 hover:bg-gray-400 hover:text-red-800" onClick={() => handleOpen()}>Update Vehicle</Button>
                <Button className="p-3 bg-white rounded-m-3 hover:bg-gray-400 hover:text-red-800" onClick={() => handleOpen()}>Delete Vehicle</Button>
            </div>
            {/* DataTable Goes Here */}
        </>
    )
}

export default DataTable
