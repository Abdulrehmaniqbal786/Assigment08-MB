import React from "react";
import { Cards } from "./Cards";
import { Grid } from "@mui/material";
import card1 from '../assets/two1.jpg';
import card2 from '../assets/two2.jpg';
import card3 from '../assets/two3.jpg';
import card4 from '../assets/two4.jpg';
import card5 from '../assets/two5.jpg';
import card6 from '../assets/two6.jpg';
import card7 from '../assets/two7.jpg';
import card8 from '../assets/two8.jpg';
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
  }
    
];
const Product_two = () => {
    return (
      <>
        <Grid   container>
          {products_arr.map((current_obj, index) => {
            return (
              <Grid key={index}item xs={12} sm={6} md={4} lg={3} xl={3}>
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
  export {Product_two};