import React from 'react'
import './App.css';
import { Navbar } from './Components/Navbar';
import { Slider } from './Components/Slider';
import { Second_Navbar } from './Components/Second_Navbar';
import {Round} from './Components/Round';
import { Products } from './Components/Product_cards';
import { Big_card } from './Components/Big_card';
import { Product_two } from './Components/Product_two';
import { Big } from './Components/Big';
import { Footer } from './Components/Footer';
import { Second_Footer } from './Components/Second_Footer';

const App = () => {
  return (
    <div>


      <Navbar/>
      <Second_Navbar/>
      <Slider/>
      <Round/>
     <Products/>
     <Big_card/>
     <Product_two/>
     <Big/>
     <Footer/>
     <Second_Footer/>
     
    </div>
  )
}

export default App