import { useState } from 'react';
import { AnimateSharedLayout, motion } from "framer-motion";
import { Grid, Typography, Box, Container, Link, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Engineering from '../components/Engineering';
import Contact from '../components/Contact';
import ScrollToTop from '../components/Utilities/ScrollToTop';
import ToggleModeButton from '../components/Utilities/ToggleModeButton';
import DrawerComp from '../components/DrawerComp';
import NavBar from '../components/NavBar';
import bg from '../public/static/images/background.png';
import LeftBar from '../components/Utilities/styles/VerticalBar';
import EngineeringPortfolio from '../components/EngineeringPortfolio';
import DataAnalysisPortfolio from '../components/DataAnalysisPortfolio';
import WritingPortfolio from '../components/WritingPortfolio';
import Head from 'next/head';




const App = () => {

  return (
    <>
      <Head>
        <title>Ramuel Batuigas</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=1024" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
      </Head>
      <Box sx={{ width: '100%', height: 650, backgroundColor: '#00000060', position: 'absolute', transform: 'skewY(-45deg)', overflow: 'hidden' }} />
      <Grid container sx={{ backgroundImage: `url(${bg.src})`, backgroundColor: '#000', backgroundSize: 'cover', backgroundPosition: 'center top', overflow: 'hidden' }}>
        <NavBar />
        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <LeftBar />
        </Grid>
        <Grid item xs={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <Grid container>
            <Grid item xs={12}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ zIndex: 2, justifyContent: 'right' }}
            >
              <Home />
            </Grid>
            <Grid item xs={12}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ width: '100%', height: 'fit-content', minHeight: 221, background: 'linear-gradient(80deg, #252728 0%, #101415 100%)', borderTop: '2px solid #282828', borderBottom: '2px solid #2c2e2e', boxShadow: '0px 0px 8px #000', display: 'flex', zIndex: 2, marginBottom: 10 }}
            >
              <About />
            </Grid>

            <Grid item xs={12}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ width: '100%', height: 'fit-content', minHeight: 221, background: 'linear-gradient(80deg, #252728 0%, #101415 100%)', borderTop: '2px solid #282828', borderBottom: '2px solid #2c2e2e', boxShadow: '0px 0px 8px #000', display: 'flex', zIndex: 2, marginBottom: 10 }}

            >
              <DataAnalysisPortfolio />
            </Grid>

            <Grid item xs={12}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ width: '100%', height: 'fit-content', minHeight: 221, background: 'linear-gradient(80deg, #252728 0%, #101415 100%)', borderTop: '2px solid #282828', borderBottom: '2px solid #2c2e2e', boxShadow: '0px 0px 8px #000', display: 'flex', zIndex: 2, marginBottom: 10 }}

            >
              <Engineering />
            </Grid>

            <Grid item xs={12}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ width: '100%', height: 'fit-content', minHeight: 221, background: 'linear-gradient(80deg, #252728 0%, #101415 100%)', borderTop: '2px solid #282828', borderBottom: '2px solid #2c2e2e', boxShadow: '0px 0px 8px #000', display: 'flex', zIndex: 2, marginBottom: 10 }}

            >
              <EngineeringPortfolio />
            </Grid>

            <Grid item xs={12}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ width: '100%', height: 'fit-content', minHeight: 221, background: 'linear-gradient(80deg, #252728 0%, #101415 100%)', borderTop: '2px solid #282828', borderBottom: '2px solid #2c2e2e', boxShadow: '0px 0px 8px #000', display: 'flex', zIndex: 2, marginBottom: 10 }}

            >
              <WritingPortfolio />
            </Grid>

            <Grid item xs={12}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ width: '100%', height: 'fit-content', minHeight: 221, background: 'linear-gradient(80deg, #252728 0%, #101415 100%)', borderTop: '2px solid #282828', borderBottom: '2px solid #2c2e2e', boxShadow: '0px 0px 8px #000', display: 'flex', zIndex: 2, marginBottom: 10 }}

            >
              <Portfolio />
            </Grid>

            <Grid item xs={12}
              component={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              sx={{ width: '100%', height: 'fit-content', minHeight: 221, background: 'linear-gradient(80deg, #252728 0%, #101415 100%)', borderTop: '2px solid #282828', borderBottom: '2px solid #2c2e2e', boxShadow: '0px 0px 8px #000', display: 'flex', zIndex: 2, marginBottom: 10 }}

            >
              <Contact />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Box sx={{ position: 'fixed' }}>
            <ScrollToTop />
          </Box>
        </Grid>
      </Grid>


    </>
  );
}

export default App;