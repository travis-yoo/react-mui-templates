import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const theme = createTheme();

export default function Submit() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: 'female',
    age: 10,
    options: ["option1"],
    inquiry: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "options") {
      // Handle checkbox options
      const options = values.options.includes(value)
        ? values.options.filter((option) => option !== value)
        : [...values.options, value];
      setValues({ ...values, options });
    } else {
      // Handle text input and select fields
      setValues({
        ...values,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!values.firstName) {
      formIsValid = false;
      newErrors["firstName"] = "Please enter your first name.";
    }

    if (!values.lastName) {
      formIsValid = false;
      newErrors["lastName"] = "Please enter your last name.";
    }

    if (!values.email) {
      formIsValid = false;
      newErrors["email"] = "Please enter your email.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit the form data
      console.log(values);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <InsertEmoticonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={values.firstName}
                  onChange={handleChange}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName}                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={handleChange}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName}                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email ? true : false}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  error={errors.gender ? true : false}
                  helperText={errors.gender}
                >   
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>              
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    name="age"
                    value={values.age}
                    onChange={handleChange}
                    error={errors.age ? true : false}
                    helperText={errors.age}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.options.includes("option1")}
                      onChange={handleChange}
                      name="options"
                      value="option1"
                    />
                  }
                  label="This one goes out to the one I love."
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="form-simple-inquiry"
                  fullWidth
                  multiline
                  rows={4}
                  name="inquiry"
                  value={values.inquiry}
                  onChange={handleChange}
                  error={errors.inquiry ? true : false}
                  helperText={errors.inquiry}          
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
