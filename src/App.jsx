import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Problema from './pages/Problema.jsx';
import Tecnologia from './pages/Tecnologia.jsx';
import Objetivos from './pages/Objetivos.jsx';
import Beneficios from './pages/Beneficios.jsx';
import Aplicacao from './pages/Aplicacao.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Problema />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/objetivos" element={<Objetivos />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/aplicacao" element={<Aplicacao />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
