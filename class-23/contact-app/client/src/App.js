import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import ViewContacts from './pages/ViewContacts';
import EditContact from './pages/EditContact';
import Header from './components/Header';
import AddContact from './pages/ AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/view" element={<ViewContacts />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
