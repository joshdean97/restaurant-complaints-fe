
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { Typography } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function MealTypeChart({ data }) {
  const mealTypeData = ['breakfast', 'lunch', 'dinner', 'brunch'].map(type => ({
    name: type,
    value: data.filter(c => c.meal_type === type).length
  }));

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Meal Type Distribution
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={mealTypeData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {mealTypeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
