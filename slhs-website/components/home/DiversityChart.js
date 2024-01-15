import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const diversityData = [
 { name: 'White', value: 35.7 },
 { name: 'Asian', value: 29.9 },
 { name: 'Hispanic', value: 24.2 },
 { name: 'Black', value: 7.2 },
 { name: 'Other ', value: 3 },

];

const COLORS = ['#E00A0A', '#0A55E0', '#E5DBD9', '#F74545', '#0088FE', ];

export default function DiversityChart() {
 return (
   <PieChart width={400} height={400}>
     <Pie
       data={diversityData}
       cx={200}
       cy={200}
       labelLine={true}
       outerRadius={80}
       fill="#8884d8"
       dataKey="value"
       label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
     >
       {diversityData.map((entry, index) => (
         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
       ))}
     </Pie>
     <Tooltip />
     <Legend verticalAlign="bottom" height={36} wrapperStyle={{ bottom: 0 }} />
   </PieChart>
 );
}