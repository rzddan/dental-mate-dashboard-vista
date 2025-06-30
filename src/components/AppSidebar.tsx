
import { useSidebar } from '@/contexts/SidebarContext';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  Users, 
  Calendar, 
  Clock, 
  Stethoscope, 
  Settings, 
  Package, 
  CreditCard, 
  Brain, 
  HelpCircle, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Menu
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const AppSidebar = ({ currentView, setCurrentView }: SidebarProps) => {
  const { isOpen, toggle } = useSidebar();

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Activity },
    { id: 'patients', name: 'Pacientes', icon: Users },
    { id: 'appointments', name: 'Consultas', icon: Calendar },
    { id: 'calendar', name: 'Agenda', icon: Clock },
    { id: 'team', name: 'Equipe', icon: Stethoscope },
    { id: 'services', name: 'Serviços', icon: Settings },
    { id: 'inventory', name: 'Estoque', icon: Package },
    { id: 'financial', name: 'Financeiro', icon: CreditCard },
    { id: 'ai', name: 'IA Amanda', icon: Brain },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggle}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 z-50 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 
        transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64' : 'w-16'}
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <div className={`flex items-center space-x-3 ${!isOpen && 'lg:hidden'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DM</span>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-gray-900 dark:text-white">Dental Mate</div>
              <div className="text-gray-500 dark:text-gray-400 text-xs">Clínica Digital</div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggle}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 lg:hidden"
          >
            {isOpen ? <ChevronLeft className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`
                w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 text-left
                ${currentView === item.id 
                  ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-700' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }
                ${!isOpen && 'lg:justify-center lg:px-2'}
              `}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className={`font-medium ${!isOpen && 'lg:hidden'}`}>
                {item.name}
              </span>
            </button>
          ))}
        </nav>

        {/* Collapse Button (Desktop) */}
        <div className="absolute bottom-4 left-4 right-4 hidden lg:block">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggle}
            className="w-full justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>

        {/* Footer */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-800 space-y-2 ${!isOpen && 'lg:hidden'}`}>
          <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm">Suporte</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm">Feedback</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
