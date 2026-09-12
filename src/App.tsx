import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Consultation from './pages/Consultation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consultation" element={<Consultation />} />
    </Routes>
  );
}

export default App;
