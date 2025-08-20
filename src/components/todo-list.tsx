import TrashIcon from '../assets/trash-bin-2-svgrepo-com.png';
import { useDispatch, useSelector } from 'react-redux';
import { markdone, remove } from '../redux/slices/todos';
import type { TodoType } from '../types/todo';
import type { RootState } from '../redux/store';

export default () => {
    const todos = useSelector<RootState, TodoType[]>(state => state.todos);
    const dispatch = useDispatch();

    return (
        <ul className='flex flex-col'>
            {todos.map(todo => (
                <label className='flex flex-col'>
                    <div className='flex gap-3 py-4 items-start'>
                        <div className='grid grid-cols-[1.3rem_1fr] gap-4 flex-1'>
                            <input name='done' type='checkbox' checked={todo.done} onChange={() => (
                                dispatch(markdone(todo.id))
                            )} className='rounded-full border border-black w-full aspect-square mt-0.5' />
                            <li className='text-2xl text-gray-600 flex-1 leading-none select-none'>{todo.title}</li>
                        </div>
                        <button className='rounded-full bg-gray-200 p-2' onClick={() => (
                            dispatch(remove(todo.id))
                        )}><img className='w-8 aspect-square' src={TrashIcon} /></button>
                    </div>
                    <hr className='text-gray-200' />
                </label>
            ))}
        </ul>
    )
}
