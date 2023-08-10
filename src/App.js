import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import Agenda from './components/pages/Agenda'
import Celebracoes from './components/pages/Celebracoes'
import Comunicacao from './components/pages/Comunicacao'
import Comunidade from './components/pages/Comunidade'
import Contato from './components/pages/Contato'
import Ensino from './components/pages/Ensino'
import Home from './components/pages/Home'
import Perseus from './components/pages/Perseus'

function App() {
  return (
    <Router>
      <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to ='/ensino'>Ensino / Estude na EWS</Link>
            <Link to ='/celebracoes'>Celebrações</Link>
            <Link to ='/comunicacao'>Comunicação</Link>
            <Link to ='/comunidade'>Comunidade em Ação</Link>
            <Link to ='/agenda'>Agenda</Link>
            <Link to ='/contato'>Contato</Link>
            <Link to ='/perseus'>Portal - Perseus</Link>         
        </nav>       
{/* Envolva seus componentes de Rota em um componente de Rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ensino" element={<Ensino />} />
          <Route path="/celebracoes" element={<Celebracoes />} />
          <Route path="/comunicacao" element={<Comunicacao />} /> 
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/agenda" element={<Agenda />} /> 
          <Route path="/contato" element={<Contato />} />  
          <Route path="/perseus" element={<Perseus />} />
        </Routes>
        <p>Footer</p>
      </div>  
    </Router>
  );
}

export default App;
