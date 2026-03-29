import { useNavigate } from 'react-router-dom';
import { Home, Users, MessageCircle, User, Search } from 'lucide-react';

export const Navigation = ({ currentPage }) => {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'search', icon: Search, label: 'Search', path: '/search' },
    { id: 'friends', icon: Users, label: 'Friends', path: '/friends' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-lg border-t flex justify-around items-center z-50" data-testid="navigation-bar">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentPage === item.id;
        return (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all ${
              isActive
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            data-testid={`nav-${item.id}`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'fill-primary' : ''}`} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;
