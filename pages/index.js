import { useState } from 'react';
import { AnimateSharedLayout, motion } from "framer-motion";
import { Grid, Typography, Box, Container, Link, Button } from "@mui/material";
import MurakamiFlower from "../components/MurakamiFlower";
import TextDecrypt from "../components/Utilities/TextDecrypt";
import About from './about';
import Cloud from '../components/Cloud';
import IndexArt from '../components/IndexArt/IndexArt';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useTheme } from '@mui/material/styles';



export default function App() {
  const theme = useTheme();

  return (
    <>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '100vh', minHeight: '100vh' }}>
        <section id="home">
          <Container>
            <Grid item xs={12}>
              <Typography variant='h6'>
                Hi, my name is
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h2'>Ramuel Batuigas</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h3'>
                I build things for the web.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'>
                I'm a <Link href='https://uwaterloo.ca/future-students/programs/management-engineering'>Management Engineer</Link> with a knack of creating tools to make life easier.
              </Typography>
            </Grid>
            <Button variant='contained'>Contact Me</Button>
            <Button variant='outlined'>Dowload My Resume</Button>
          </Container>
        </section>
      </Grid>
      <section id="about">
        <Container>
          <Grid container xs={12}>
            <Header title='About Me'></Header>
          </Grid>
        </Container>
      </section>
    </>
  );
}
