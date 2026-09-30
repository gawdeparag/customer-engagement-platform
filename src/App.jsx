import './App.css';
import DashboardPage from './features/dashboard/Dashboard'
import AppLayout from './components/Layout/AppLayout';

function App() {
	return (
		<AppLayout>
			<DashboardPage />
		</AppLayout>
	)
}

export default App
