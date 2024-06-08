import React from 'react';
import { useState, useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import ActivityChart from './components/ActivityChart';
import ActivityTable from './components/ActivityTable';
import SummaryStatistics from './components/SummaryStatistics';
import mockData from './data/mockData.json';

const App: React.FC = () => {
    const [data, setData] = useState(mockData);

    useEffect(() => {
        // Fetch data from mock API if needed, here we're using local data.
        setData(mockData);
    }, []);

    return (
        <div>
            <GlobalStyles />
            <h1>Developer Activity Dashboard</h1>
            <SummaryStatistics data={data} />
            <ActivityChart data={data} />
            <ActivityTable data={data} />
        </div>
    );
};

export default App;
