import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';

const enrollmentData = [
 { grade: '9th Grade', enrollment: 885 },
 { grade: '10th Grade', enrollment: 856 },
 { grade: '11th Grade', enrollment: 867 },
 { grade: '12th Grade', enrollment: 974 },
];

export default function EnrollmentChart() {
 return (
  <BarChart width={500} height={300} data={enrollmentData}>
    <XAxis dataKey="grade" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="enrollment">
      {enrollmentData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.grade === '9th Grade' ? 'rgb(239 68 68)' : entry.grade === '10th Grade' ? 'rgb(2 132 199)' : entry.grade === '11th Grade' ? 'rgb(248 113 113)' : 'lightgray'} />
      ))}
    </Bar>
  </BarChart>
 );
}