import { useAuth0 } from "@auth0/auth0-react";

async function fetchData() {
  const { getAccessTokenSilently } = useAuth0();
  const token = await getAccessTokenSilently();

  const response = await fetch("YOUR_BACKEND_ENDPOINT", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // ... rest of your fetch logic
}
