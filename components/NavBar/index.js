import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Tabs, Tab, useMediaQuery, useTheme, Grid, Box, Container } from "@mui/material";
import DrawerComp from '../DrawerComp';
import Link from 'next/link';
import Image from 'next/image';


const NavBar = () => {
    const theme = useTheme();
    // console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    // console.log(isMatch);

    return (
        <>
            <AppBar position='absolute' sx={{ background: 'transparent' }}>
                <Grid component={Container}>
                    <Toolbar disableGutters>
                        {isMatch ? (
                            <>
                                <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Link href='/' passHref>
                                        <Box component='a'>
                                            <Image src='../images/nav_logo.png' width={40} height={40} alt="Ramuel" />
                                        </Box>
                                    </Link>
                                    <Typography variant='h6' sx={{ margin: 2 }}>Ramuel</Typography>
                                </Grid>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                <Link href='#home' passHref>
                                    <Box component='a'>
                                    </Box>
                                </Link>
                                <Link href="#about" passHref>
                                    <Button component='a' sx={{ marginLeft: 'auto' }} variant='primary'><Typography variant='h6'>About</Typography></Button>
                                </Link>
                                <Link href="#portfolio" passHref>
                                    <Button component='a' variant='primary'><Typography variant='h6'>Portfolio</Typography></Button>
                                </Link>
                                <Link href="#engineering" passHref>
                                    <Button component='a' variant='primary'><Typography variant='h6'>Engineering</Typography></Button>
                                </Link>
                                <Link href="#contact" passHref>
                                    <Button component='a' variant='primary'><Typography variant='h6'>Contact</Typography></Button>
                                </Link>
                            </>
                        )}
                    </Toolbar>
                </Grid>
            </AppBar>
        </>
    );
};
export default NavBar;