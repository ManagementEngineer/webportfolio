import { Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import NavBar from '../components/VerticalTabs'
import TextDecrypt from '../components/Utilities/TextDecrypt';
import ArrayDecrypt from '../components/Utilities/ArrayDecrypt';
import { AnimatePresence } from 'framer-motion'
import VerticalTabs from '../components/VerticalTabs'

export default function Home() {
    const [animateTitle, setAnimateTitle] = useState(false);
    const [animateSubtitle, setAnimateSubtitle] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            //animation
            setAnimateTitle(true);
        }, 500);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            //animation
            setAnimateSubtitle(true);
        }, 1500);
    }, []);

    return (
        <>
            <section id="#">
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {animateTitle &&
                        <Grid item xl={12}>
                            <TextDecrypt text='Hi, Im Ramuel' variant='h2' alignment='center' />
                        </Grid>}
                    {animateSubtitle &&
                        <>
                            <Grid item xl={12}>
                                <TextDecrypt text='Web Developer' variant='h2' alignment='center' />
                            </Grid>
                            <Grid item xl={12}>
                                <ArrayDecrypt variant='h2' alignment='center' />
                            </Grid>
                        </>
                    }
                </Grid>
            </section>
        </>
    )
}
