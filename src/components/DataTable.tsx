import {useState} from 'react'
import Button from './Button'
import Modal from './Modal'
// import {server_calls} from '../api/server'
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

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            />

            <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"} style={{height: 400, width: 750}}>
                <h2 className="p-3 bg-white text-red-800 text-center my-2 rounded">My Car Collection</h2>
                <DataGrid sx={{backgroundColor: 'white', color: 'darkred'}} rows={carData} columns={columns} pageSizeOptions={[5]} checkboxSelection={true} onRowSelectionModelChange={(item:any) => {
                    setSelectionModel(item)
                }}
                />
            </div>
        </>
    )
}

export default DataTable
