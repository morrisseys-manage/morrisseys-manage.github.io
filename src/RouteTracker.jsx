import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RouteTracker() {
  const location = useLocation();
  
  useEffect(() => {
    // For Google Analytics 4
    if (window.gtag) {
      window.gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
        page_path: location.pathname,
      });
    }
    // For Google Tag Manager
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page_path: location.pathname,
      });
    }
  }, [location]);
  
  return null;
}

export default RouteTracker;
