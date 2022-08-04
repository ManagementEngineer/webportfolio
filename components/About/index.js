import { Typography, Link, Grid, List, ListItem, Button } from "@mui/material";
import Header from "../Header";
import Image from 'next/image';

const About = () => {
    return (
        <>
            <section id="about">
                <Grid container sx={{ margin: 2, backgroundImage: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//backgrounds/greyfade.jpg', background: 'linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.733) 100%, rgb(0, 0, 0) 100%)' }}>
                    <Grid item xs={12}>
                        <Header title='About Me' />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='body1'>

                            Hello! I'm Ramuel and I enjoy creating things that makes life easier. My interest in software programming started when I was in high school 'hacking' a pocket wifi device to get free internet on a speedy 360 kbps.
                            Although I pursued more of a jack-of-all-trades <Link href='https://www.youtube.com/watch?v=Zw6UpeFCeN0' target="_blank" rel="noopener noreferrer">program</Link> in the <Link>BEST</Link> engineering school in Canada, the pull of building things in software is too strong in me.
                            <br />
                            After my stint in Amazon as an Area Manager, I've been studying web development and created several projects on my own.
                            <br />
                            Below are the list of technologies I've been working on recently:
                            <br />
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
                        <Image src='/static/images/og_fantasysports.png' height='50%' width='100%' layout='responsive' objectFit='contain' />
                    </Grid>
                </Grid>
            </section>
        </>
    )
};

export default About;