import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './components/Layout/AppLayout.jsx'
import Dashboard from './features/dashboard/Dashboard.jsx'
import Customers from './features/customers/Customers.jsx';
import Reports from './features/reports/Reports.jsx';
import Administration from './features/administration/Administration.jsx';
import NotFound from './features/not-found/NotFound.jsx';
import CustomerDetails from './features/customers/CustomerDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'customers',
        element: <Customers />
      },
      {
        path: 'customers/:customerId',
        element: <CustomerDetails />
      },
      {
        path: 'reports',
        element: <Reports />
      },
      {
        path: 'administration',
        element: <Administration />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ],
  },
])

export default router;
