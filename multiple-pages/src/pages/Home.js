import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';

function Home() {
  
  const [singleLineText, setSingleLineText] = useState('');
  const [multiLineText, setMultiLineText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Code for executing actions here
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="single-line-text-field"
        label="Single-line Text Field"
        value={singleLineText}
        onChange={(event) => setSingleLineText(event.target.value)}
      />
      <TextField
        id="multi-line-text-field"
        label="Multi-line Text Field"
        multiline
        rows={4}
        value={multiLineText}
        onChange={(event) => setMultiLineText(event.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={isLoading}
      >
        Execute
      </Button>
      {isLoading && <CircularProgress />}
    </form>
  );
}

export default Home;
