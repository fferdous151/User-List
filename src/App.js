import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../src/Pages/Main';
import Home from '../src/Pages/Home';
import UserDetailsCard from './Pages/Card/UserDetailsCard';
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
        },
        {
          path: '/user/:userID',
          loader: async ({ params }) => {
            return fetch(`https://dummyjson.com/users/${params.userID}`)
          },
          element: <UserDetailsCard></UserDetailsCard>
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
