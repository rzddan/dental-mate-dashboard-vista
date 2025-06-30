
import { useState } from 'react';
import { SidebarProvider } from '@/contexts/SidebarContext';
import { ThemeProvider } from '@/hooks/useTheme';
import AppSidebar from '@/components/AppSidebar';
import ThemeToggle from '@/components/ThemeToggle';
import Dashboard from '@/components/Dashboard';
import CalendarPage from '@/components/CalendarPage';
import PatientsPage from '@/components/pages/PatientsPage';
import AppointmentsPage from '@/components/pages/AppointmentsPage';
import TeamPage from '@/components/pages/TeamPage';
import ServicesPage from '@/components/pages/ServicesPage';
import InventoryPage from '@/components/pages/InventoryPage';
import FinancialPage from '@/components/pages/FinancialPage';
import AIPage from '@/components/pages/AIPage';
import LandingPage from '@/components/LandingPage';
import { useSidebar } from '@/contexts/SidebarContext';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const AppContent = () => {
  const [currentView, setCurrentView] = useState<string>('landing');
  const { isOpen, toggle } = useSidebar();

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'patients':
        return <PatientsPage />;
      case 'appointments':
        return <AppointmentsPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'team':
        return <TeamPage />;
      case 'services':
        return <ServicesPage />;
      case 'inventory':
        return <InventoryPage />;
      case 'financial':
        return <FinancialPage />;
      case 'ai':
        return <AIPage />;
      default:
        return <LandingPage />;
    }
  };

  if (currentView === 'landing') {
    return (
      <div className="relative min-h-screen">
        <LandingPage />
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setCurrentView('dashboard')}
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3"
          >
            🚀 Acessar Demo
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <AppSidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${isOpen ? 'lg:ml-64' : 'lg:ml-16'}`}>
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggle}
                className="lg:hidden text-gray-600 dark:text-gray-300"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                {currentView === 'dashboard' ? 'Dashboard' : 
                 currentView === 'patients' ? 'Pacientes' :
                 currentView === 'appointments' ? 'Consultas' :
                 currentView === 'calendar' ? 'Agenda' :
                 currentView === 'team' ? 'Equipe' :
                 currentView === 'services' ? 'Serviços' :
                 currentView === 'inventory' ? 'Estoque' :
                 currentView === 'financial' ? 'Financeiro' :
                 currentView === 'ai' ? 'IA Amanda' : 'Dental Mate'}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button
                onClick={() => setCurrentView('landing')}
                variant="outline"
                size="sm"
                className="hidden sm:flex"
              >
                Voltar ao Início
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="relative">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppContent />
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Index;
