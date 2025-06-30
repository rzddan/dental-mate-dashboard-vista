
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import LandingPage from '@/components/LandingPage';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  if (currentView === 'dashboard') {
    return <Dashboard />;
  }

  return (
    <div className="relative">
      <LandingPage />
      
      {/* Demo Access Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setCurrentView('dashboard')}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3"
        >
          🚀 Ver Dashboard Demo
        </Button>
      </div>
    </div>
  );
};

export default Index;
