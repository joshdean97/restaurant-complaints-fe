
import { useState, useEffect } from 'react';
import { 
  Box, 
  CssBaseline, 
  ThemeProvider, 
  createTheme,
  Container,
  Grid,
  Paper,
  Typography,
  CircularProgress,
  Alert
} from '@mui/material';
import ComplaintsList from './components/ComplaintsList';
import OverviewCards from './components/OverviewCards';
import SeverityChart from './components/SeverityChart';
import MealTypeChart from './components/MealTypeChart';
import ComplaintHeatmap from './components/ComplaintHeatmap';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/complaints');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Restaurant Dashboard
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <OverviewCards data={data} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 2, height: 300 }}>
                <SeverityChart data={data?.complaints || []} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, height: 300 }}>
                <MealTypeChart data={data?.complaints || []} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, height: 400 }}>
                <ComplaintHeatmap data={data?.complaints || []} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <ComplaintsList complaints={data?.complaints || []} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
