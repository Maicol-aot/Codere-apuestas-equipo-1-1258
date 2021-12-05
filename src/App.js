import './App.css';
import AdminNavbar from './components/AdminNavbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import GestionarUsuarios from './components/GestionarUsuarios';
import Sidebar from './components/Sidebar';
import GestionarEventos from './components/GestionarEventos';
import SearchBar from './components/SearchBar';
import PerfilAdmin from './pages/PerfilAdmin';
import Paginator from './components/Paginator';


function App() {
  return (
    <div>
      <AdminNavbar />
      <Sidebar />
     
      <GestionarUsuarios/>
      {/* <Dashboard /> */}
      <Footer />
    </div>
  );
}

export default App;
