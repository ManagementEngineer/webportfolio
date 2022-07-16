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
import Contact from '../components/Contact';
import ScrollToTop from '../components/Utilities/ScrollToTop';
import ToggleModeButton from '../components/Utilities/ToggleModeButton';




const App = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container>
        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Box sx={{ position: 'fixed' }}>
            <Button><Typography>Scroll To Top</Typography></Button>
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '100vh', minHeight: '100vh' }}>
          <Grid container>
            <Grid item
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <Home />
            </Grid>
            <Grid item
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <About />
            </Grid>
            <Grid item
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <Portfolio />
            </Grid>
            <Grid item
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <Engineering />
            </Grid>
            <Grid item
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <Contact />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Box sx={{ position: 'fixed' }}>
            <ScrollToTop />
            <ToggleModeButton />
          </Box>
        </Grid>
      </Grid>


    </>
  );
}

export default App;