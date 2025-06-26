import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import VisionBoard from './pages/VisionBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision-board" element={<VisionBoard />} />
        {/* Add more routes as needed */}
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
