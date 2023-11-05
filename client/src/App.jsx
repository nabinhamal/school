import React, { useEffect ,useState} from 'react'
import { Home,About } from './containers';
import { motion } from "framer-motion";





const App = () => (
  <div className='w-full xl:w-[1500px] py-32 px-4 lg:px-12 pr-4 lg:pr-32'>

      
        <Home/>
        <About/>
      </div>

);

export default App;


