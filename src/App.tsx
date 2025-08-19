import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import StoreProvider from './redux/provider';

function App() {
    return (
        <StoreProvider>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className='flex flex-col w-212.5 h-156 py-8.5 pl-12.5 pr-22 gap-y-13 items-center'>
                    <span className='text-9xl text-gray-200 font-semibold'>todos</span>
                    <div className='flex flex-col w-full gap-8.5'>
                        <TodoForm />
                        <TodoList />
                    </div>
                </div>
            </div>
        </StoreProvider>
    )
}

export default App
