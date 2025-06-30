
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </Button>
  );
};

export default ThemeToggle;
