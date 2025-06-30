
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeProvider } from '@/hooks/use-theme';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AppSidebar } from '@/components/AppSidebar';
import LandingPage from '@/components/LandingPage';
import Dashboard from '@/components/Dashboard';
import CalendarPage from '@/components/CalendarPage';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'calendar'>('landing');

  if (currentView === 'landing') {
    return (
      <ThemeProvider defaultTheme="light">
        <div className="relative min-h-screen">
          <LandingPage />
          
          {/* Demo Access Button */}
          <div className="fixed bottom-6 right-6 z-50 flex space-x-2">
            <Button
              onClick={() => setCurrentView('dashboard')}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3"
            >
              🚀 Ver Dashboard Demo
            </Button>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="light">
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <AppSidebar />
          
          <SidebarInset className="flex-1">
            {/* Header */}
            <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <div className="h-4 w-px bg-border mx-2" />
                <h1 className="text-lg font-semibold text-foreground">
                  {currentView === 'dashboard' ? 'Dashboard' : 'Calendário'}
                </h1>
              </div>
              
              <div className="ml-auto flex items-center gap-2 px-4">
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={() => setCurrentView(currentView === 'dashboard' ? 'calendar' : 'dashboard')}
                    variant="outline"
                    size="sm"
                  >
                    {currentView === 'dashboard' ? '📅 Calendário' : '📊 Dashboard'}
                  </Button>
                  <Button
                    onClick={() => setCurrentView('landing')}
                    variant="outline"
                    size="sm"
                  >
                    🏠 Landing
                  </Button>
                  <ThemeToggle />
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6">
              {currentView === 'dashboard' ? <Dashboard /> : <CalendarPage />}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Index;
