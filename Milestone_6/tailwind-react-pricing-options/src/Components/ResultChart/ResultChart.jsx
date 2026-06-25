import React from 'react';
import { ResponsiveContainer, Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
        "id": 1,
        "name": "Abir Hasan",
        "physics": 82,
        "chemistry": 75,
        "math": 90
    },
    {
        "id": 2,
        "name": "Nusrat Jahan",
        "physics": 88,
        "chemistry": 92,
        "math": 85
    },
    {
        "id": 3,
        "name": "Sajid Islam",
        "physics": 45,
        "chemistry": 50,
        "math": 40
    },
    {
        "id": 4,
        "name": "Fariha Rahman",
        "physics": 76,
        "chemistry": 81,
        "math": 79
    },
    {
        "id": 5,
        "name": "Tanvir Ahmed",
        "physics": 65,
        "chemistry": 70,
        "math": 68
    },
    {
        "id": 6,
        "name": "Maliha Khan",
        "physics": 95,
        "chemistry": 89,
        "math": 98
    },
    {
        "id": 7,
        "name": "Zayan Chowdhury",
        "physics": 55,
        "chemistry": 62,
        "math": 58
    },
    {
        "id": 8,
        "name": "Anika Tabassum",
        "physics": 84,
        "chemistry": 80,
        "math": 82
    },
    {
        "id": 9,
        "name": "Samiul Haque",
        "physics": 38,
        "chemistry": 42,
        "math": 35
    },
    {
        "id": 10,
        "name": "Ishrat Jahan",
        "physics": 72,
        "chemistry": 78,
        "math": 74
    }
]
const ResultChart = () => {
    return (
        <>
            <div>
                <LineChart width={800} height={500} data={resultData}>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Line dataKey="math"></Line>
                    <Line dataKey={'chemistry'} stroke='red'></Line>
                </LineChart>

            </div>
        </>
    );
};

export default ResultChart;