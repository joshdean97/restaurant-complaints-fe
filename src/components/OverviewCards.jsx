
import { Grid, Paper, Typography } from '@mui/material';

export default function OverviewCards({ data }) {
  const metrics = [
    {
      title: 'Total Complaints',
      value: data?.count || 0,
    },
    {
      title: 'Average Severity',
      value: data?.complaints?.reduce((acc, curr) => acc + curr.severity, 0) / data?.count || 0,
      format: (value) => value.toFixed(1),
    },
    {
      title: 'Open Cases',
      value: data?.complaints?.filter(c => c.status === 'Open').length || 0,
    },
    {
      title: 'Resolution Rate',
      value: (data?.complaints?.filter(c => c.status !== 'Open').length / data?.count) * 100 || 0,
      format: (value) => `${value.toFixed(1)}%`,
    },
  ];

  return (
    <Grid container spacing={3}>
      {metrics.map((metric) => (
        <Grid item xs={12} sm={6} md={3} key={metric.title}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography color="textSecondary" gutterBottom>
              {metric.title}
            </Typography>
            <Typography variant="h4">
              {metric.format ? metric.format(metric.value) : metric.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
