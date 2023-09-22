import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';

const DashboardPage: React.FC = () => {
    const { user } = useAuth0();

    return (
        <div>
            <header>
                <h1>Welcome to the Dashboard, {user!.name}!</h1>
            </header>

            <section>
                <h2>Your Access Requests</h2>
                {/* Here, you can render a list or table showing the user's access requests. 
                     Depending on the user's role, you could show more content, like admin controls, etc. 
                */}
            </section>

            <section>
                <h2>Your Activities</h2>
                {/* Here, you can display activities or other content relevant to the authenticated user. */}
            </section>
        </div>
    );
}

export default DashboardPage;
