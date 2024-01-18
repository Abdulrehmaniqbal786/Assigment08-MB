import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    
    <Box width='250px' color={'white'} sx={{ minWidth: 120 }}>
        
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">ALL CATEGORIES</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
             <MenuItem color='white' className='bg-black' value={10}>BIKES</MenuItem>
          <MenuItem color='white' value={10}>CLOTHES</MenuItem>
          <MenuItem color='white' value={20}>SHOES</MenuItem>
          <MenuItem color='white' value={30}>WATCH</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export {BasicSelect};