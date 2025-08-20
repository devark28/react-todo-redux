import { useDispatch } from 'react-redux';
import AddIcon from '../assets/plus-circle-filled-svgrepo-com.png';
import { create } from '../redux/slices/todos';
import type { RootDispatch } from '../redux/store';

export default () => {
    const dispatch = useDispatch<RootDispatch>();

    const storeTodo = (formData: FormData) => {
        const { title, done } = Object.fromEntries(formData);
        dispatch(create({ title: title.toString(), done: !!done }))
    };

    return (
        <form action={storeTodo} className='flex shadow-md/30 rounded-full gap-3 pr-7 justify-center items-center'>
            <label className='flex-1'>
                <input name='title' className='w-full py-4 pl-7 outline-none' placeholder='Add todo...' required autoFocus />
            </label>
            <button><img className='w-8 aspect-square' src={AddIcon} /></button>
        </form>
    )
}
