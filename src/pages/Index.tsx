
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import LandingPage from '@/components/LandingPage';
import Dashboard from '@/components/Dashboard';
import CalendarPage from '@/components/CalendarPage';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'calendar'>('landing');

  if (currentView === 'dashboard') {
    return (
      <div className="relative">
        <Dashboard />
        {/* Navigation buttons for demo */}
        <div className="fixed bottom-6 right-6 z-50 flex space-x-2">
          <Button
            onClick={() => setCurrentView('calendar')}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            📅 Calendário
          </Button>
          <Button
            onClick={() => setCurrentView('landing')}
            size="sm"
            variant="outline"
            className="shadow-lg"
          >
            🏠 Landing
          </Button>
        </div>
      </div>
    );
  }

  if (currentView === 'calendar') {
    return (
      <div className="relative">
        <CalendarPage />
        {/* Navigation buttons for demo */}
        <div className="fixed bottom-6 right-6 z-50 flex space-x-2">
          <Button
            onClick={() => setCurrentView('dashboard')}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            📊 Dashboard
          </Button>
          <Button
            onClick={() => setCurrentView('landing')}
            size="sm"
            variant="outline"
            className="shadow-lg"
          >
            🏠 Landing
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <LandingPage />
      
      {/* Demo Access Button */}
      <div className="fixed bottom-6 right-6 z-50 flex space-x-2">
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
