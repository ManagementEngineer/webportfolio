import { Typography, Link, Grid, List, ListItem, Button, CardMedia, Box } from "@mui/material";
import Header from "../Header";

const About = () => {
    return (
        <>
            <section id="about">
                <Grid container margin={3}>
                    <Grid item xs={12}>
                        <Header title='About Me' />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container >
                            <Grid item xs={6}>
                                <Typography variant='body1'>
                                    Hello! I am Ramuel and I enjoy creating things that makes life easier. My interest in software programming started when I was in high school hacking a pocket wifi device to get free internet on a speedy 360 kbps.
                                    Although I pursued more of a jack-of-all-trades <Link href='https://www.youtube.com/watch?v=Zw6UpeFCeN0' target="_blank" rel="noopener noreferrer">program</Link> in the <Link>BEST</Link> engineering school in Canada, the pull of building things in software is too strong in me.
                                    <br />
                                    After my stint in Amazon as an Area Manager, Ive been studying web development and created several projects on my own.
                                    <br />
                                    Below are the list of technologies Ive been working on recently:
                                    <br />
                                    <Grid container>
                                        <Grid item>
                                            <List>
                                                <ListItem>Javascript</ListItem>
                                                <ListItem>React</ListItem>
                                                <ListItem>Python</ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item>
                                            <List>
                                                <ListItem>Material UI</ListItem>
                                                <ListItem>NextJS</ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Typography>
                                {/* <Typography variant='body1'>
                                    Hello! I am Ramuel and I enjoy creating things that make life simpler. My interest in engineering started from playing with RC toys and &quot;hacking&quot; portable internet devices. Since my co-op stint at TTC, I&apos;ve been wanting to go back. I see a huge potential in leveraging large datasets to improve maintenance strategies in the railway industry.
                                    <br />
                                    <br />
                                    With the combination of my work experience and my jack-of-all-trades <Link href='https://www.youtube.com/watch?v=Zw6UpeFCeN0' target="_blank" rel="noopener noreferrer">program</Link>, I believe that I am a great fit to be an engineering technologist for RAMS.
                                    <br />
                                    <br />
                                    I like to constantly improve my skillset. I&apos;ve created this website using the technologies I&apos;ve learned recently:
                                    <br />
                                    <Grid container>
                                        <Grid item>
                                            <List>
                                                <ListItem>Javascript</ListItem>
                                                <ListItem>React</ListItem>
                                                <ListItem>Python</ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item>
                                            <List>
                                                <ListItem>Material UI</ListItem>
                                                <ListItem>NextJS</ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                    <br />
                                    Scroll down to know more about my skills!
                                    <br />
                                </Typography> */}
                            </Grid>
                            <Grid item xs={6}>
                                <Box>
                                    <CardMedia
                                        component='img'
                                        image='/static/images/ttc_photo.jpg'
                                        alt='rj in train'
                                        height='500'
                                        sx={{ objectFit: 'contain' }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>





            {/* <Grid item xs={12}>
                    <Header title='About Me' />
                </Grid>
                <Grid item xs={12} >
                    <Grid container >
                        <Grid item xs={12} s={12} m={6} l={6} xl={6}>
                            <Typography variant='body1'>
                                Hello! I'm Ramuel and I enjoy creating things that makes life easier. My interest in software programming started when I was in high school 'hacking' a pocket wifi device to get free internet on a speedy 360 kbps.
                                Although I pursued more of a jack-of-all-trades <Link href='https://www.youtube.com/watch?v=Zw6UpeFCeN0' target="_blank" rel="noopener noreferrer">program</Link> in the <Link>BEST</Link> engineering school in Canada, the pull of building things in software is too strong in me.
                                <br />
                                After my stint in Amazon as an Area Manager, I've been studying web development and created several projects on my own.
                                <br />
                                Below are the list of technologies I've been working on recently:
                                <br />
                                <Grid container>
                                    <Grid item>
                                        <List>
                                            <ListItem>Javascript</ListItem>
                                            <ListItem>React</ListItem>
                                            <ListItem>Python</ListItem>
                                        </List>
                                    </Grid>
                                    <Grid item>
                                        <List>
                                            <ListItem>Material UI</ListItem>
                                            <ListItem>NextJS</ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} s={12} m={6} l={6} xl={6}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    image='/static/images/ttc_photo.jpg'
                                    alt='rj in train'
                                    height='600'
                                />
                            </Box>
                        </Grid>
                    </Grid>

                </Grid> */}
        </>
    )
};

export default About;