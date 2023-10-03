import React, {useEffect, useState} from 'react';
import { IdToken, useAuth0 } from '@auth0/auth0-react';
import { RouteProps } from 'react-router-dom';
import { fetchUserRole } from "../../api/fetchData";
import RoleRequest from "../RoleRequests";
import Navbar from '../NavBar';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute: React.FC<RouteProps> = (props) => {

    const { isAuthenticated, roles } = useAuth();


    if (isAuthenticated) {
        if(roles === null) {
            return <div>Loading...</div>
        } else if(roles.length === 0) {
            return <RoleRequest />;
        }
        return <div {...props}></div>;
    } else {
        return <div>Loading...</div>
    }
};

export default ProtectedRoute;
