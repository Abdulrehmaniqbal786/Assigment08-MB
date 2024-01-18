import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Btn = (props) =>{
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">{props.label}</Button>
      <Button variant="contained">{props.label}</Button>
      <Button variant="outlined">{props.label}</Button>
    </Stack>
  );
}
export {Btn};