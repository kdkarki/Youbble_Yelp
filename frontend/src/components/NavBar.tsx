import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  padding: 10px 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);  // Subtle shadow as an underline
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

    return (
        <Nav>
            <Title>Youbbler Yelp</Title>
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
