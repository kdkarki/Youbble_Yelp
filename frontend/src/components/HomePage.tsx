import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import ResultsTable from './ResultsTable';
import { searchYelp } from '../api/fetchData';
import { Business } from '../@types/Business';

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage: React.FC = () => {
  const [items, setItems] = useState('');
  const [location, setLocation] = useState('');
  const [results, setResults] = useState<Business[]>([]);
  const [token, setToken] = useState<string>('');

  const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
      const fetchToken = async () => {
        try {
          const accessToken = await getAccessTokenSilently();
          setToken(accessToken);
        } catch (e) {
          console.error("Error obtaining access token:", e);
        }
      };
  
      fetchToken();
    }, [getAccessTokenSilently]);

    const handleSearch = async () => {
      try {
        const data = await searchYelp(items, location, token);
        setResults(data.businesses);
    } catch (error) {
        console.error("Error fetching Yelp data:", error);
        // Handle the error, maybe set some state to show an error message to the user
    }
    };

    return (
        <Container>
            <SearchBar>
                <Input 
                    placeholder="Search items..." 
                    value={items}
                    onChange={(e) => setItems(e.target.value)}
                />
                <Input 
                    placeholder="Location..." 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <Button onClick={handleSearch}>Search</Button>
            </SearchBar>
            <ResultsTable data={results} />
        </Container>
    );
}

export default HomePage;
