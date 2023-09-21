import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Navbar: React.FC = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <nav>
            {/* Other navbar content */}
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            {isAuthenticated && (user!.name || user!.email)}
        </nav>
    );
};

export default Navbar;
