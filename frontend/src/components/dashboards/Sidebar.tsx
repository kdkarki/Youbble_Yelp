import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: #ecf0f1;
  padding-top: 20px;
`;

const SidebarItem = styled.div`
  padding: 15px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #34495e;
  }
`;

const Icon = styled.span`
  margin-right: 10px;
`;

interface SidebarProps {
    onDashboardClick: () => void;
    onAccessRequestClick: () => void;
    onJobViewClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onDashboardClick, onAccessRequestClick, onJobViewClick }) => {
  return (
    <SidebarContainer>
      <SidebarItem onClick={onDashboardClick}>
        <Icon>📊</Icon> Dashboard
      </SidebarItem>
      { /* If the user is an admin */ }
      <SidebarItem onClick={onAccessRequestClick}>
        <Icon>👥</Icon> Access Requests
      </SidebarItem>
      <SidebarItem onClick={onJobViewClick}>
        <Icon>🚀</Icon> Jobs
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
