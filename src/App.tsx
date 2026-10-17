import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/contact" component={ContactPage} />
        {/* Fallback to Work if visited unknown route */}
        <Route component={WorkPage} />
      </Switch>
    </div>
  );
};

export default App;
