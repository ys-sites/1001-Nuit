import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ReviewPage from './ReviewPage';

export default function App() {
  return (
    <div className="bg-[#0a0b0a] text-[#efe7d2] min-h-screen font-sans selection:bg-[#cfbe91] selection:text-[#0a0b0a] flex flex-col">
      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </main>
    </div>
  );
}
