import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../src/Pages/Main';
import Home from '../src/Pages/Home';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://dummyjson.com/users/'),
          element: <Home></Home>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
