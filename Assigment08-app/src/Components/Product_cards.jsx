import React from "react";
import {Cards} from './Cards'
import { Grid } from "@mui/material";
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';
import card6 from '../assets/card6.jpg';
import card7 from '../assets/card7.jpg';
import card8 from '../assets/card8.jpg';
import card9 from '../assets/card9.jpg';
import card10 from '../assets/card10.jpg';
import card11 from '../assets/card11.jpg';
import card12 from '../assets/card12.jpg';

const products_arr = [
  {
    img_url:card1,
    title: "Noon Website",
    text: " Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img_url:card2,
    title: "Noon Website",
    text: " Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img_url:card3,
    title: "Noon Website",
    text: " Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img_url:card4,
    title: "Noon Website",
    text: " Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img_url:card5,
    title: "Noon Website",
    text: " Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img_url:card6,
    title: "Noon Website",
    text: " Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img_url:card7,
    title: "Noon Website",
    text: " Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img_url:card8,
    title: "Noon Website",
    text: " Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img_url:card9,
    title: "Noon Website",
    text: " Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img_url:card10,
    title: "Noon Website",
    text: " Lorem ipsum dolor sit amet consectetur.",
  },
  {
    
    img_url:card11,
    title: "Noon Website",
    text: " Lorem ipsum dolor sit amet consectetur.",
  },
  {
    
    img_url:card12,
    title: "Noon Website",
    text: " Lorem ipsum dolor sit amet consectetur.",
  },
  
];
const Products = () => {
    return (
      <>
        <Grid container>
          {products_arr.map((current_obj, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Cards
                  //   img_url, title, rating, sold, dis_price, original_price
                  card_data={current_obj}
                />
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  };
  export {Products};