import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Users, Target, Calendar, BarChart2, 
  Mail, Users2, Brain, MessageCircle, Settings,
  HelpCircle, User
} from 'lucide-react';

const menuItems = [
  { title: 'Home', icon: Home, path: '/dashboard' },
  { title: 'Customers', icon: Users, path: '/dashboard/customers' },
  { title: 'Leads & Opportunities', icon: Target, path: '/dashboard/leads' },
  { title: 'Tasks & Activities', icon: Calendar, path: '/dashboard/tasks' },
  { title: 'Sales Analytics', icon: BarChart2, path: '/dashboard/analytics' },
  { title: 'Marketing Automation', icon: Mail, path: '/dashboard/marketing' },
  { title: 'Team Collaboration', icon: Users2, path: '/dashboard/collaboration' },
  { title: 'AI Insights', icon: Brain, path: '/dashboard/ai-insights' },
  { title: 'Chatbot', icon: MessageCircle, path: '/dashboard/chatbot' },
  { title: 'Settings', icon: Settings, path: '/dashboard/settings' },
  { title: 'Help Center', icon: HelpCircle, path: '/dashboard/help' },
  { title: 'My Account', icon: User, path: '/dashboard/profile' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col w-64 bg-black/90">
      <div className="flex items-center justify-center h-20 shadow-md">
        <img src="/assets/images/Logo.png" alt="logo" className="w-30 h-10"/>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-2 transition-colors rounded-lg
                  ${isActive 
                    ? 'bg-secondary text-primary' 
                    : 'text-gray-300 hover:bg-secondary/10'
                  }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 