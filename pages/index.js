import { useState } from 'react';
import { AnimateSharedLayout, motion } from "framer-motion";
import { Grid, Typography, Box, Container, Link, Button } from "@mui/material";
import MurakamiFlower from "../components/MurakamiFlower";
import TextDecrypt from "../components/Utilities/TextDecrypt";

import Cloud from '../components/Cloud';
import IndexArt from '../components/IndexArt/IndexArt';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useTheme } from '@mui/material/styles';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Engineering from '../components/Engineering';



const App = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container >
        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Box sx={{ position: 'fixed' }}>
            <Typography>Sidebar 1</Typography>
          </Box>

        </Grid>
        <Grid item xs={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '100vh', minHeight: '100vh' }}>
          <Grid container>
            <Grid item>
              <Home />
            </Grid>
            <Grid item>
              <About />
            </Grid>
            <Grid item>
              <Portfolio />
            </Grid>
            <Grid item>
              <Engineering />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Box sx={{ position: 'fixed' }}>
            <Typography>Sidebar 2</Typography>
          </Box>
        </Grid>
      </Grid>


    </>
  );
}

export default App;