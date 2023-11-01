// import {useSubmit} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Button from './Button'
import Input from './Input'
import {server_calls} from '../api/server'
import {useDispatch, useStore} from 'react-redux'
import {chooseYear, chooseMake, chooseModel, chooseCost} from '../redux/slices/RootSlice'

interface CarFormProps {
    id?: string[];
    onClose: () => void;
}

const CarForm = (props:CarFormProps) => {
    const {register, handleSubmit} = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`)
        console.log(props.id)
        console.log(data)

        if(props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${data.make} ${props.id}`)
            setTimeout(() => {window.location.reload()}, 500);
            event.target.reset()
        } else {
            dispatch(chooseYear(data.year));
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseCost(data.cost));

            server_calls.create(store.getState());
            setTimeout(() => {window.location.reload()}, 500);
            event.target.reset()
            props.onClose()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name='year' placeholder='Year'/>
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name='make' placeholder='Make'/>
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name='model' placeholder='Model'/>
                </div>
                <div>
                    <label htmlFor="cost">Cost</label>
                    <Input {...register('cost')} name='cost' placeholder='Cost'/>
                </div>
                <div className="flex justify-center p-1">
                    <Button className="transition duration-200 flex m-3 bg-red-800 text-white p-2 rounded hover:bg-gray-400 hover:text-red-800">Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default CarForm