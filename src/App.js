import './App.css';
import AdminNavbar from './components/AdminNavbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <AdminNavbar />
      <Sidebar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
