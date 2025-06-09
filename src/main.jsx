import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './components/home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BrouseBooks from './components/BrouseBooks.jsx';
import SelectedCard from './components/Selectedcard.jsx'; 
import AddbookCard from './components/addbook.jsx';
import store from './components/store.js';
import { Provider } from 'react-redux';
import NotFound from "./components/NotFound.jsx"; // Correct folder & casing

const appRouter = createBrowserRouter([
  
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',         // this is the default child route
        element: <Home />
      },
      {
        path: '/brouse',
        element: <BrouseBooks />  // optional extra route
      },
      {
        path :'book/:id',
        element:<SelectedCard/>
      },
      {
        path:'/add',
        element:<AddbookCard/>
      },
      {
         path:"*",
         element:<NotFound/>
      }
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={appRouter} /></Provider>
);
