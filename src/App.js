import './App.css';
import AdminNavbar from './components/AdminNavbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import GestionarUsuarios from './components/GestionarUsuarios';
import Sidebar from './components/Sidebar';
import GestionarEventos from './components/GestionarEventos';
import SearchBar from './components/SearchBar';
import PerfilAdmin from './pages/PerfilAdmin';


function App() {
  return (
    <div>
      <AdminNavbar />
      <Sidebar />
     
     <PerfilAdmin />
      {/* <Dashboard /> */}
      <Footer />
    </div>
  );
}

export default App;
