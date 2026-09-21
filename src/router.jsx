import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './components/Layout/AppLayout.jsx'
import DashboardPage from './features/dashboard/pages/DashboardPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
])

export default router;
