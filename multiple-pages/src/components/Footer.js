import { Container, Grid, Link, Typography } from '@mui/material';

function Footer() {
  return (
    <footer>
      <Container maxWidth="lg" sx={{ mt: 5, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary">
              &copy; {new Date().getFullYear()} My Company, Inc. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary" align="right">
              <Link href="#">Privacy Policy</Link>
              {' | '}
              <Link href="#">Terms of Use</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
