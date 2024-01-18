import React from "react";
import { Grid } from "@mui/material";
import round1 from '../assets/round1.jpg';
import round2 from '../assets/round2.jpg';
import round3 from '../assets/round3.jpg';
import round4 from '../assets/round4.jpg';
import round5 from '../assets/round5.jpg';
import round6 from '../assets/round6.jpg';
import round7 from '../assets/round7.jpg';
import round8 from '../assets/round8.jpg';
import round9 from '../assets/round9.jpg';
import round10 from '../assets/round10.jpg';
import round11 from '../assets/round11.jpg';

import {Goll} from '../Components/Goll'




const Goll_arr = [
  {
    img_url:round1,
    
  },
  {
    img_url:round2,
  },
  {
    img_url:round3,
  },
  {
    img_url:round4,
  },
  {
    img_url:round5,
  },
  {
    img_url:round6,
  },
  {
    img_url:round7,
  },
  {
    img_url:round8,
  },
  {
    img_url:round9,
  },{
    img_url:round10,
  },{
    img_url:round11,
  },
  
  
];


const Round = () => {
  return (
    <>
      <Grid marginLeft={7} padding={2} container >
        {Goll_arr.map((current_obj, index) => {
          return (
            <Grid  key={index} item xs={12} sm={6} md={4} lg={1} xl={1}>
              <Goll 
              card_data={current_obj}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export {Round};

