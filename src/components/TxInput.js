import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const TxHashForm = () => {
    const [value, setValue] = useState('');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with the collected value
      console.log(value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          label="tx hash"
          value={value}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Query Tx
        </Button>
      </form>
    );
  };

  export default TxHashForm;