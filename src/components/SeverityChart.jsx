
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Typography } from '@mui/material';

export default function SeverityChart({ data }) {
  const severityData = Array.from({ length: 5 }, (_, i) => ({
    severity: i + 1,
    count: data.filter(c => c.severity === i + 1).length
  }));

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Complaint Severity Distribution
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={severityData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="severity" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#1976d2" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
