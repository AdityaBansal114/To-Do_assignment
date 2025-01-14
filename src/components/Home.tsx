import Auth from './Auth';
import TodoList from './TodoList';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';



const Home = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();
  
    if (!isAuthenticated) {
      return <Auth />;
    }
  
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Welcome  <span className='text-blue-700'>{user?.name}</span> </h1>
            <button
              onClick={() => dispatch(logout())}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <TodoList />
          </div>
        </main>
      </div>
    );
  };

  export default Home;