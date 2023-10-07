import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  padding: 10px 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);  // Subtle shadow as an underline
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px; /* Spacing between links */
`;

const StyledLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  color: ${props => props.isActive ? '#007BFF' : '#333'};
  transition: color 0.3s;

  &:hover {
    color: #007BFF;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: #333;
  font-size: 1.5em;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserEmail = styled.span`
  margin-right: 10px;
  color: #666;  // Slightly muted text color
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Navbar: React.FC = () => {
    const { user, isAuthenticated } = useAuth0();
    const { roles } = useAuth();
    const location = useLocation();

    return (
        <Nav>
          <Title>Youbbler Yelp</Title>
      
          {roles && roles?.length > 0 && 
            <NavLinks>
              <StyledLink to="/" isActive={location.pathname === "/"}>Search</StyledLink>
              <StyledLink to="/dashboard" isActive={location.pathname === "/dashboard"}>Dashboard</StyledLink>
            </NavLinks>
          }
              {isAuthenticated && (
                  <UserInfo>
                      <UserEmail>{user?.email}</UserEmail>
                      <ButtonGroup>
                          <LogoutButton />
                      </ButtonGroup>
                  </UserInfo>
              )}
          </Nav>
    );
};

export default Navbar;
