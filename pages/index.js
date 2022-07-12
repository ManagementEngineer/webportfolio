import { useState } from 'react';
import { AnimateSharedLayout, motion } from "framer-motion";
import { Grid, Typography, Box, Container } from "@mui/material";
import MurakamiFlower from "../components/MurakamiFlower";
import TextDecrypt from "../components/Utilities/TextDecrypt";
import About from './about';
import Cloud from '../components/Cloud';
import IndexArt from '../components/IndexArt/IndexArt';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';


export default function App() {


  return (
    <>
      <Grid container sx={{ minHeight: '100vh', minWidth: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ecedef', padding: 3 }}>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <TextDecrypt text='Hi, Im Ramuel, Web Developer.' variant='h2' />
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, position: 'relative' }} layoutId='flower' component={motion.div}>
          <Box sx={{ zIndex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
            {/* <MurakamiFlower viewbox='0 0 360 360' overflow='visible' /> */}
            <IndexArt id='flower' />
          </Box>
        </Grid>
      </Grid >
      <Container>
        <Grid container>
          <Grid item>
            <Header title='About Me' />

          </Grid>
        </Grid>
      </Container>

    </>

  );
}
