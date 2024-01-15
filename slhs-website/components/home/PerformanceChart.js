import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
 {year: '2005', performance: 40},
 {year: '2006', performance: 45},
 {year: '2007', performance: 50},
 {year: '2008', performance: 55},
 {year: '2009', performance: 60},
 {year: '2010', performance: 65},
 {year: '2011', performance: 70},
 {year: '2012', performance: 75},
 {year: '2013', performance: 80},
 {year: '2014', performance: 85},
 {year: '2015', performance: 90},
 {year: '2016', performance: 95},
 {year: '2017', performance: 100},
 {year: '2018', performance: 105},
 {year: '2019', performance: 110},
 {year: '2020', performance: 115},
 {year: '2021', performance: 120},
 {year: '2022', performance: 125},
 {year: '2023', performance: 130},
 {year: '2024', performance: 135},
];

export default function PerformanceChart() {
 return (
   <LineChart
     width={500}
     height={300}
     data={data}
     margin={{
       top: 5, right: 30, left: 20, bottom: 5,
     }}
   >
     <CartesianGrid strokeDasharray="3 3" />
     <XAxis dataKey="year" />
     <YAxis />
     <Tooltip />
     <Legend />
     <Line type="monotone" dataKey="performance" stroke="#8884d8" activeDot={{ r: 8 }} />
   </LineChart>
 );
}