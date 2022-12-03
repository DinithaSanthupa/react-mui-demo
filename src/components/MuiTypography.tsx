import { Typography } from '@mui/material';

const MuiTypography = () => {
  return (
    <div className="App">
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>

      <Typography variant="subtitle1">subtitle1 heading</Typography>
      <Typography variant="subtitle2">subtitle2 heading</Typography>

      <Typography variant="body1">body1 heading</Typography>
      <Typography variant="body2">body2 heading</Typography>
    </div>
  );
};

export default MuiTypography;
