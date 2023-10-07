import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';
import AccessRequestManagement from './AccessRequestManagement';
import JobView from './JobView';

const Dashboard = () => {
  const { roles } = useAuth();
  const [activeView, setActiveView] = useState<'JOBS' | 'ACCESS_REQUEST' | 'DASHBOARD'>('DASHBOARD');


  return (
    <div style={{ display: 'flex' }}>
      <Sidebar 
        onDashboardClick={() => setActiveView('DASHBOARD')}
        onAccessRequestClick={() => setActiveView('ACCESS_REQUEST')}
        onJobViewClick={() => setActiveView('JOBS')}
      />
      {activeView === 'DASHBOARD' && <DashboardContent />}
      {activeView === 'ACCESS_REQUEST' && <AccessRequestManagement />}
      {activeView === 'JOBS' && <JobView />}
    </div>
  );
};

export default Dashboard;
