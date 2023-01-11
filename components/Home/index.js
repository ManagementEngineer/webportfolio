import { Grid, Typography, Button, Container, Link, Box } from "@mui/material";
import BackgroundGradient from "../Utilities/styles/BackgroundGradient";

const Home = () => {

    return (
        <section id="home">

            <Grid container sx={{ display: 'flex', alignItems: 'center', minWidth: '100vh', minHeight: '100vh' }}>
                <Container>
                    <Grid item xs={12}>
                        <Typography variant='h6'>
                            Hi, my name is
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h1'>Ramuel Batuigas</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h3' sx={{ color: '#a5e0f3' }}>
                            I build things.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ marginBottom: 5 }}>
                        <Typography variant='h6'>
                            I am a <Link href='https://uwaterloo.ca/future-students/programs/management-engineering' target="_blank" rel="noopener noreferrer">Management Engineering</Link> graduate with a knack of creating tools and solving problems to make life easier.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Button sx={{ marginRight: 2, height: 50 }} variant='contained' href='#contact'><Typography>Contact Me</Typography></Button>
                            <Button sx={{ marginRight: 2, height: 50 }} variant='outlined' href='https://drive.google.com/file/d/1Pq-1CivWGdYKcs-FkwqDdjArSNRs1kYu/view?usp=sharing' target="_blank"><Typography>Resume</Typography></Button>
                        </Grid>
                    </Grid>

                </Container>
            </Grid>
        </section>
    );

}
export default Home;