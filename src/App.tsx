import ReduxProvider from './store/provider';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { PublicLayout, PrivateLayout } from './containers/Layout';
import ErrorPage from './containers/error-page';
import Signin from './containers/Signin';
import Dashboard from './containers/Dashboard';
import Signup from './containers/Signup';

const defaultTheme = createTheme();

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <PublicLayout>
        <Outlet />
      </PublicLayout>
    ),
    children: [
      {
        path: '',
        element: <Signin />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <PrivateLayout>
        <Outlet />
      </PrivateLayout>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ReduxProvider>
        <RouterProvider router={router} />
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;
