import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const comparisonData = [
  { name: 'Mathematics', school: 69, district: 46, state: 30 },
  { name: 'Reading', school: 93, district: 75, state: 60 },
  { name: 'Science', school: 94, district: 78, state: 50 },
];

export default function ComparisonChart() {
  return (
    <BarChart width={600} height={300} data={comparisonData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="school" fill="rgb(239 68 68)" />
      <Bar dataKey="district" fill="rgb(2 132 199)	" />
      <Bar dataKey="state" fill="lightgray" />
    </BarChart>
  );
}