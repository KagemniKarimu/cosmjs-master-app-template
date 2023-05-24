import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const WalletAddressForm = () => {
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
    <center>
      <form onSubmit={handleSubmit}>
        <TextField
          label="cosmos address"
          value={value}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Get Balance
        </Button>
      </form>
    </center>
    );
  };

  export default WalletAddressForm;