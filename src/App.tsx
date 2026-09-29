import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import HomePage from './HomePage';

const ReviewPage = lazy(() => import('./ReviewPage'));
const ClosedPage = lazy(() => import('./ClosedPage'));
const ThankYouPage = lazy(() => import('./ThankYouPage'));
const CareersPage = lazy(() => import('./CareersPage'));

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0b0a]">
      <div className="w-8 h-8 border-2 border-[#cfbe91] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#0a0b0a] text-[#efe7d2] min-h-screen font-sans selection:bg-[#cfbe91] selection:text-[#0a0b0a] flex flex-col">
      <main className="flex-grow flex flex-col">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/carrieres" element={<Navigate to="/careers" replace />} />
            <Route path="/jobs" element={<Navigate to="/careers" replace />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/closed" element={<ClosedPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </Suspense>
      </main>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
