// import React from "react"
import CarForm from "./CarForm"

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = (props: Props) => {
    if(!props.open) return(<></>);

    return (
        <div className="w-full h-full top-0 left-0 fixed flex overflow-auto z-1 justify-center items-center align-middle bg-black bg-opacity-50" onClick={props.onClose}>
            <div className="max-w-600px w-2/5 fixed flex z-1 mt-20 bg-white rounded" onClick={(e) => {e.stopPropagation()}}>
                <div className="w-full flex flex-col">
                    <div className="flex flex-row justify-end">
                        <p className="flex justify-start transition duration-200 m-3 bg-red-800 text-white p-2 rounded hover:bg-gray-400 hover:text-red-800" onClick={props.onClose}>X</p>
                    </div>
                    <div className="flex flex-col items-center text-red-800 text-center mt-3 p-2">
                        <CarForm id={props.id} onClose={props.onClose}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal