import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #f2f2f2;
`;

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

interface ActivityTableProps {
    data: Array<{ [key: string]: any }>;
}

const ActivityTable: React.FC<ActivityTableProps> = ({ data }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <Th>Date</Th>
                    <Th>Commits</Th>
                    <Th>Pull Requests Opened</Th>
                    <Th>Pull Requests Merged</Th>
                    <Th>Meetings</Th>
                    <Th>Documentation</Th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <Td>{item.date}</Td>
                        <Td>{item.commits}</Td>
                        <Td>{item.pullRequestsOpened}</Td>
                        <Td>{item.pullRequestsMerged}</Td>
                        <Td>{item.meetings}</Td>
                        <Td>{item.documentation}</Td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ActivityTable;
