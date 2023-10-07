// DashboardContent.tsx

import React from 'react';
import styled from 'styled-components';

// Styled components
const DashboardContainer = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 80%;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const DashboardContent: React.FC = () => {
  return (
    <DashboardContainer>
      <Section>
        <SectionTitle>Welcome</SectionTitle>
        <p>Welcome to the dashboard! Here you'll find an overview of important data and features.</p>
      </Section>

      <Section>
        <SectionTitle>Recent Activity</SectionTitle>
        {/* List recent activity here */}
        <p>No recent activity.</p>
      </Section>

      <Section>
        <SectionTitle>Quick Links</SectionTitle>
        <ul>
          {/* Add quick navigation links, actions, or features here */}
          <li><a href="/path-to-feature">View All Jobs</a></li>
          <li><a href="/path-to-another-feature">Manage Access Requests</a></li>
        </ul>
      </Section>
    </DashboardContainer>
  );
};

export default DashboardContent;
