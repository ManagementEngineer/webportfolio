import { Typography, Link, Grid, List, ListItem, Button } from "@mui/material";
import Header from "../Header";
import Image from 'next/image';

const About = () => {
    return (
        <>
            <section id="#about">
                <Grid container sx={{ margin: 2 }}>
                    <Grid item xs={12}>
                        <Header title='About Me' />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='body1'>
                            <p>
                                Hello! I'm Ramuel and I enjoy creating things that makes life easier. My interest in software programming started when I was in high school 'hacking' a pocket wifi device to get free internet on a speedy 360 kbps.
                                Although I pursued more of a jack-of-all-trades <Link href='https://www.youtube.com/watch?v=Zw6UpeFCeN0' target="_blank" rel="noopener noreferrer">program</Link> in the <Link>BEST</Link> engineering school in Canada, the pull of building things in software is too strong in me.
                            </p>
                            <p>
                                After my stint in Amazon as an Area Manager, I've been studying web development and created several projects on my own.
                            </p>
                            <p>Below are the list of technologies I've been working on recently: </p>
                            <List>
                                <ListItem>Javascript</ListItem>
                                <ListItem>React</ListItem>
                                <ListItem>Python</ListItem>
                                <ListItem>Material UI</ListItem>
                                <ListItem>NextJS</ListItem>
                            </List>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Image src='/static/images/og_fantasysports.png' height='100%' width='100%' layout='responsive' objectFit='contain' />
                    </Grid>
                </Grid>
            </section>
        </>
    )
};

export default About;