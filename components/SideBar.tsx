// CollapsibleSidebar.tsx

import React, { useState } from 'react';

const CollapsibleSidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-row">
      <div onClick={toggleSidebar} className={`bigDiv ${sidebarOpen ? 'bigDiv-open' : ''} flex flex-col`}>
            <div className="app-container bg-gray-400">
                <div>
                    <button onClick={toggleSidebar} className="toggle-button bg-gray-400 text-7xl">
                        =
                    </button>
                </div>
                </div>
            <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''} bg-gray-400 `}>
                {/* Sidebar content goes here */}
                <div className="flex flex-col overflow-hidden">
                    <a className="text-white p-4 bg-gray-400">Upload</a>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <a className="text-white p-4 bg-gray-400">Download</a>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <a className="text-white p-4 bg-gray-400">Discover</a>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <a className="text-white p-4 bg-gray-400">Record</a>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <a className="text-white p-4 bg-gray-400">Edit </a>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <a className="text-white p-4 bg-gray-400">Schedule</a>
                </div>
            
            </div>
        </div>

    </div>
  );
};

export default CollapsibleSidebar;


