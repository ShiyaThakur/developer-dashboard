import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
`;

const SummaryItem = styled.div`
    text-align: center;
`;

interface SummaryStatisticsProps {
    data: Array<{ [key: string]: number | string }>;
}

const SummaryStatistics: React.FC<SummaryStatisticsProps> = ({ data }) => {
    const totalCommits = data.reduce((acc, item) => acc + (item.commits as number), 0);
    const totalPullRequests = data.reduce((acc, item) => acc + (item.pullRequestsOpened as number), 0);
    const totalMerges = data.reduce((acc, item) => acc + (item.pullRequestsMerged as number), 0);
    const totalMeetings = data.reduce((acc, item) => acc + (item.meetings as number), 0);
    const totalDocs = data.reduce((acc, item) => acc + (item.documentation as number), 0);

    return (
        <SummaryContainer>
            <SummaryItem>
                <h2>{totalCommits}</h2>
                <p>Commits</p>
            </SummaryItem>
            <SummaryItem>
                <h2>{totalPullRequests}</h2>
                <p>Pull Requests Opened</p>
            </SummaryItem>
            <SummaryItem>
                <h2>{totalMerges}</h2>
                <p>Pull Requests Merged</p>
            </SummaryItem>
            <SummaryItem>
                <h2>{totalMeetings}</h2>
                <p>Meetings</p>
            </SummaryItem>
            <SummaryItem>
                <h2>{totalDocs}</h2>
                <p>Documentation</p>
            </SummaryItem>
        </SummaryContainer>
    );
};

export default SummaryStatistics;
