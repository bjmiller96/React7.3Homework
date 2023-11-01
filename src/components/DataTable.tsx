import {useState} from 'react'
import Button from './Button'
import Modal from './Modal'
import {server_calls} from '../api/server'
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import {useGetData} from '../custom-hooks/FetchData'

const columns: GridColDef[] = [
    {field: 'id', headerName: "ID", width: 90, hideable: true},
    {field: 'year', headerName: "Vehicle Year", flex: 1},
    {field: 'make', headerName: "Vehicle Make", flex: 1},
    {field: 'model', headerName: "Vehicle Model", flex: 1},
    {field: 'cost', headerName: "Cost", flex: 1}
]

const DataTable = () => {
    let [open, setOpen] = useState(false);
    const {carData, getData} = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout(() => {window.location.reload()}, 500)
    }

    return (
        <>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className="flex flex-row justify-center mt-12">
                <div>
                    <button className="transition duration-200 p-3 bg-red-800 text-white rounded m-3 hover:bg-white hover:text-red-800" onClick={() => handleOpen()}>Add New Vehicle</button>
                </div>
                <Button className="transition duration-200 p-3 bg-red-800 text-white rounded m-3 hover:bg-white hover:text-red-800" onClick={handleOpen}>Update Vehicle</Button>
                <Button className="transition duration-200 p-3 bg-red-800 text-white rounded m-3 hover:bg-white hover:text-red-800" onClick={deleteData}>Delete Vehicle</Button>
            </div>
            <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"} style={{height: 600, width: 800}}>
                <h2 className="p-3 bg-white text-red-800 text-center my-2 rounded">My Car Collection</h2>
                <DataGrid sx={{backgroundColor: 'white', color: 'darkred'}} rows={carData} columns={columns} pageSizeOptions={[100]} checkboxSelection={true} onRowSelectionModelChange={(item:any) => {
                    setSelectionModel(item)
                }}
                />
            </div>
        </>
    )
}

export default DataTable
