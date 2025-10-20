import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Home from '../pages/Home.jsx';
import Servicos from '../pages/Servicos.jsx';
import Galeria from '../pages/Galeria.jsx';
import Agendamento from '../pages/Agendamento.jsx';
import Contato from '../pages/Contato.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;