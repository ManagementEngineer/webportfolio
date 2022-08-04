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
                            I build things for the web.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>
                            I'm a <Link href='https://uwaterloo.ca/future-students/programs/management-engineering' target="_blank" rel="noopener noreferrer">Management Engineer</Link> with a knack of creating tools to make life easier.
                        </Typography>
                    </Grid>
                    <Button variant='contained' href='#contact'><Typography>Contact Me</Typography></Button>
                    <Button variant='outlined'><Typography>Resume</Typography></Button>
                </Container>
            </Grid>
        </section>
    );

}
export default Home;