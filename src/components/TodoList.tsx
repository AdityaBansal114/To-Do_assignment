import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addTodo, toggleTodo, deleteTodo } from '../store/todosSlice';
import { CheckCircle2, Circle, Trash2, Sun, CheckCircle, ListTodo } from 'lucide-react';
import Weather from './Weather';

const TodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const [isOutdoor, setIsOutdoor] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.items);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const completionPercentage = totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo({
        id: Math.random().toString(),
        text: newTodo,
        completed: false,
        isOutdoor,
        createdAt: new Date().toISOString(),
      }));
      setNewTodo('');
      setIsOutdoor(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 flex gap-8">

      <div className="w-64 space-y-6">

        <div
          className="radial-progress text-blue-800 text-xl"
          style={
            {
              '--value': `${completionPercentage}`,
              '--size': '12rem',
              '--thickness': '2rem',
            } as React.CSSProperties
          }
          role="progressbar"
        >
          {completionPercentage}%
        </div>


        {/* //djhcbb */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ListTodo className="h-5 w-5 text-indigo-600" />
              <span className="text-gray-600">Total Tasks</span>
            </div>
            <span className="font-bold text-lg">{totalTodos}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-600">Completed</span>
            </div>
            <span className="font-bold text-lg">{completedTodos}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Circle className="h-5 w-5 text-yellow-600" />
              <span className="text-gray-600">Pending</span>
            </div>
            <span className="font-bold text-lg">{totalTodos - completedTodos}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Weather />

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isOutdoor}
                onChange={(e) => setIsOutdoor(e.target.checked)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="flex items-center gap-1">
                Outdoor Task
              </span>
            </label>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Todo
            </button>
          </div>
        </form>

        <div className="space-y-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  className="text-gray-500 hover:text-indigo-600"
                >
                  {todo.completed ? (
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  ) : (
                    <Circle className="h-6 w-6" />
                  )}
                </button>
                <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
                  {todo.text}
                </span>
                {todo.isOutdoor && (
                  <Sun className="h-5 w-5 text-yellow-600" />
                )}
              </div>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;