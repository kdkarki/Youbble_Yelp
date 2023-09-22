import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

interface Props {
    data: any[];
}

const ResultsTable: React.FC<Props> = ({ data }) => {
    return (
        <Table>
            {data.length > 0 && (<thead>
                <tr>
                    <Th>Name</Th>
                    <Th>Address</Th>
                    <Th>Rating</Th>
                    {/* Add other columns as necessary */}
                </tr>
            </thead>
            )}
            <tbody>
                {data.map((result, index) => (
                    <tr key={index}>
                        <Td>{result.name}</Td>
                        <Td>{result.address}</Td>
                        <Td>{result.rating}</Td>
                        {/* Add other cells as necessary */}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ResultsTable;
