import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import VisionBoard from './pages/VisionBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/vision-board" element={<VisionBoard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
