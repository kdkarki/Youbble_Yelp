import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #007BFF;
  border: none;
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <StyledButton onClick={() => logout({logoutParams: { returnTo: window.location.origin }})}>
      Log Out
    </StyledButton>
  );
}

export default LogoutButton;