import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import HomePage from './HomePage';

const SITE = 'https://www.1001nuit.com';

// Per-route SEO titles/descriptions (OpenSEO audit: no shared title across pages)
const ROUTE_META: Record<string, { title: string; description: string; noindex?: boolean }> = {
  '/': {
    title: '1001 Nuits | Halal Asian Fusion Restaurant in Montreal',
    description:
      '1001 Nuits is a halal Asian fusion restaurant in Dollard-des-Ormeaux, Montreal. Weekend AYCE buffet, sushi & Asian classics à la carte. Serving Montreal, Laval & the West Island. Reserve your table.',
  },
  '/careers': {
    title: 'Careers at 1001 Nuits | Join Our Montreal Restaurant Team',
    description:
      'Join the 1001 Nuits team in Dollard-des-Ormeaux, Montreal. Explore open roles at our halal Asian fusion restaurant and apply today.',
  },
  '/carrieres': {
    title: 'Carrières au 1001 Nuits | Joignez notre équipe à Montréal',
    description:
      "Joignez l'équipe du 1001 Nuits à Dollard-des-Ormeaux, Montréal. Découvrez nos postes ouverts dans notre restaurant asiatique halal.",
  },
  '/review': {
    title: 'Leave a Review | 1001 Nuits Montreal',
    description:
      'Enjoyed your meal at 1001 Nuits? Leave us a review and tell Montreal about your halal Asian fusion experience.',
  },
  '/thank-you': {
    title: 'Thank You | 1001 Nuits',
    description: 'Thank you for contacting 1001 Nuits.',
    noindex: true,
  },
  '/closed': {
    title: 'Currently Closed | 1001 Nuits',
    description: '1001 Nuits is currently closed. Check our opening hours.',
    noindex: true,
  },
};

function usePageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? ROUTE_META['/'];
    document.title = meta.title;
    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', SITE + pathname);
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);
    let robots = document.head.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', meta.noindex ? 'noindex, follow' : 'index, follow');
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute('href', SITE + pathname);
  }, [pathname]);
}

function MetaUpdater() {
  usePageMeta();
  return null;
}

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
      <MetaUpdater />
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
