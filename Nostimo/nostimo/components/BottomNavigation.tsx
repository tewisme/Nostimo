import React from 'react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'search', label: 'Search', icon: 'search' },
    { id: 'add', label: 'Add', icon: 'add' },
    { id: 'bookmark', label: 'Bookmark', icon: 'bookmark' },
    { id: 'profile', label: 'Profile', icon: 'profile' },
  ];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-orange-600 flex items-center justify-around h-16 max-w-full"
      style={{ backgroundColor: 'hsl(30 75% 45%)' }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 flex items-center justify-center h-full transition-all ${
            activeTab === tab.id ? 'opacity-100' : 'opacity-60'
          }`}
        >
          {tab.id === 'home' && (
            <svg
              className="w-6 h-6"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
            </svg>
          )}
          {tab.id === 'search' && (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          )}
          {tab.id === 'add' && (
            <svg
              className="w-6 h-6"
              fill="white"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="white"
                strokeWidth={2}
              />
              <path d="M12 8v8M8 12h8" stroke="white" strokeWidth={2} />
            </svg>
          )}
          {tab.id === 'bookmark' && (
            <svg
              className="w-6 h-6"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M5 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-3-5 3V5z" />
            </svg>
          )}
          {tab.id === 'profile' && (
            <svg
              className="w-6 h-6"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
};
