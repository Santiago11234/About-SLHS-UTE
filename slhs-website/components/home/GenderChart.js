import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';

const genderData = [
 { name: 'Female', value: 49 },
 { name: 'Male', value: 51 },
];

export default function GenderChart() {
 return (
 <BarChart width={300} height={300} data={genderData}>
   <XAxis dataKey="name" />
   <YAxis />
   <Tooltip />
   
   <Bar dataKey="value">
     {genderData.map((entry, index) => (
       <Cell key={`cell-${index}`} fill={entry.name === 'Female' ? 'rgb(239 68 68)' : 'blue'} />
     ))}
   </Bar>
 </BarChart>
 );
}