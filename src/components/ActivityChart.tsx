import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ActivityChartProps {
    data: Array<{ [key: string]: any }>;
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="commits" stroke="#8884d8" />
                <Line type="monotone" dataKey="pullRequestsOpened" stroke="#82ca9d" />
                <Line type="monotone" dataKey="pullRequestsMerged" stroke="#ffc658" />
                <Line type="monotone" dataKey="meetings" stroke="#ff7300" />
                <Line type="monotone" dataKey="documentation" stroke="#387908" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ActivityChart;
