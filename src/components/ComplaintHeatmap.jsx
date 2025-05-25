
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip } from 'recharts';
import { Typography } from '@mui/material';
import { parseISO, format } from 'date-fns';

export default function ComplaintHeatmap({ data }) {
  const heatmapData = data.map(complaint => ({
    hour: parseISO(complaint.complaint_date).getHours(),
    day: format(parseISO(complaint.complaint_date), 'EEEE'),
    value: complaint.severity,
  }));

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Complaint Timing Heatmap
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis dataKey="hour" type="number" name="Hour" domain={[0, 23]} />
          <YAxis dataKey="day" type="category" name="Day" />
          <ZAxis dataKey="value" range={[50, 400]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={heatmapData} fill="#1976d2" />
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
}
